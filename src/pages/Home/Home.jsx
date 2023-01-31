import { getTrending } from "services/api"
import { useState, useEffect } from 'react';

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
    
    return (
        <>
        <h1>Trending today</h1>
        <ul >
                {movies.map(({id, poster_path, title}) => (
                    <li >
                        <a href="1">
                            <img key={id} src={poster_path} alt={title} />
                            <h2>{title}</h2>
                        </a>
                    </li>
                    ))}
        </ul>
            </>
    )
}