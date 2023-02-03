import { Link, Outlet, useParams, useNavigate, useLocation, } from "react-router-dom";
import { getMovieDetails } from "services/api";
import { useState, useEffect } from "react";
import { Loader } from "components/Loader/Loader";

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';
    
        useEffect(() => {
        const getDetails = async () => {
            try {
                                setIsLoading(true);
                const response = await getMovieDetails(movieId);
                setMovie(response);
            } catch (error) {
                console.log('Error')
            } finally {
                setIsLoading(false);
            }
            };
            getDetails();
        }, [movieId]);
    
      const backToMovies = () => {
    navigate(backLinkHref);
  };
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const { poster_path, title, name, overview, genres } = movie;
    
    return (
        <>
            <button type="button" onClick={backToMovies}>Back to movies</button>

                {isLoading && <Loader />}

                <div>
                    <img src={IMG_URL + poster_path} alt="" />
                <h2>Title</h2>
                <p>{title || name}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{genres?.length > 0
                  ? genres.map(genre => genre.name).join(', ')
                  : '-'}</p>
                    <h2>Additional information</h2>
                    <ul>
                        <li>
                            <Link to={'cast'} state={{ from: location?.state?.from }}>Cast</Link>
                        </li>
                        <li>
                            <Link to={'reviews'} state={{ from: location?.state?.from }}>Reviews</Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>

</>
    )
}