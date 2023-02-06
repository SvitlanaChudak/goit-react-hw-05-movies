import { getTrending } from "services/api"
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { List, Image, Container, Item, Title, MovieLink } from "./Home.styled";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const response= await getTrending();
                setMovies(response);
            } catch (error) {
                console.log('Error');
            } finally {
                setIsLoading(false);
            }
            };
            fetchMovies();
    }, []);
    
    return (
        <Container >

            <h1>Trending today</h1>

            {isLoading && <Loader />}

            <List>
            {movies.map(({ id, poster_path, title, name }) => (
                    <Item key={id}>
                    <MovieLink  to={`/movies/${id}`} state={{ from: location }}>
                            <Image src={poster_path && poster_path  !== null
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://i.ibb.co/Mg2D0bG/no-image-available.webp`} alt=""/>
                            <Title>{title || name}</Title>
                    </MovieLink>
                </Item>
            ))}
                </List>
            </Container>
    )
}