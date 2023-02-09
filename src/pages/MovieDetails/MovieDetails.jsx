import { Outlet, useParams, useNavigate, useLocation, } from "react-router-dom";
import { getMovieDetails } from "services/api";
import { useState, useEffect } from "react";
import { Button, Container, Image, Info, Title, InfoList, InfoLink } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';
    
        useEffect(() => {
            const getDetails = async () => {
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
        
    const { poster_path, title, name, overview, genres } = movie;
        const poster = poster_path && poster_path  !== null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://i.ibb.co/Mg2D0bG/no-image-available.webp`;
    
    return (
        
        <>
            <Button type="button" onClick={backToMovies}>Back to movies</Button>

                <Container>
                <Image src={poster} alt="" width='300' />
                <Info>
                <h2>Title</h2>
                <p>{title || name}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{genres?.length > 0
                  ? genres.map(genre => genre.name).join(', ')
                        : '-'}</p>
                </Info>
                </Container>
                    <Title>Additional information</Title>
                    <InfoList>
                        <li>
                            <InfoLink to={'cast'} state={{ from: location?.state?.from }}>Cast</InfoLink>
                        </li>
                        <li>
                            <InfoLink to={'reviews'} state={{ from: location?.state?.from }}>Reviews</InfoLink>
                        </li>
                    </InfoList>
                    <Outlet />
                

</>
    )
}

export default MovieDetails;