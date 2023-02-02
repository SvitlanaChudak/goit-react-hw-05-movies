import { getTrending } from "services/api"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const response= await getTrending();
                setMovies(response.results);
            } catch (error) {
                console.log('Error');
            } finally {
                setIsLoading(false);
            }
            };
            fetchMovies();
    }, []);
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <>

            <h1>Trending today</h1>

            {isLoading && <Loader />}

            <ul>
            {movies.map(({ id, poster_path, title, name }) => (
                    <li key={id}>
                    <Link to={`${id}`}>
                            <img src={IMG_URL + poster_path} alt="" />
                            <h2>{title || name}</h2>
                    </Link>
                </li>
            ))}
                </ul>

            </>
    )
}