import { Link, Outlet, useParams, useNavigate, useLocation, } from "react-router-dom";
import { getMovieDetails } from "services/api";
import { useState, useEffect } from "react";

export const MovieDetails = ({poster_path, title, name, overview, genre_ids}) => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';
    
        useEffect(() => {
        const getDetails = async (movieId) => {
            try {
                const response = await getMovieDetails(movieId);
                setMovie(response);
            } catch (error) {
                console.log('Error')
            };
            };
            getDetails();
        }, [movieId]);
    
      const backToMovies = () => {
    navigate(backLinkHref);
  };
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <>
            <button type="button" onClick={backToMovies}>Back to movies</button>
            {movie && (
                <div>
                    <img src={IMG_URL + poster_path} alt="" />
                    <h2>Title {title || name}</h2>
                    <p>Overview {overview}</p>
                    <p>Genres {genre_ids}</p>
                    <p>Additional information</p>
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
            )};
</>
    )
}