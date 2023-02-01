import { getTrending } from "services/api"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const results = await getTrending();
                setMovies(prevMovies => [...prevMovies, ...results]);
            } catch (error) {
                console.log('Error')
            };
            };
            fetchMovies();
    }, []);
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <>
            <h1>Trending today</h1>
            {movies.length > 0 && (
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
                )}
            </>
    )
}