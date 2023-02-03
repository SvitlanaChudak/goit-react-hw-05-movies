import { useState, useEffect } from "react";
import { getMovieCredits } from "services/api";
import { useParams } from 'react-router-dom';

export const Cast = () => {
    const { movieId } = useParams('movieId');
    const [credits, setCredits] = useState([]);
    
        useEffect(() => {
        const getCast = async (movieId) => {
            try {
                const response = await getMovieCredits(movieId);
                setCredits(response);
            } catch (error) {
                console.log('Error')
            };
            };
            getCast();
        }, [movieId]);
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            {credits.length > 0 && (
                        <ul>
            {credits.map(({cast_id, profile_path, name, character}) => (
                    <li key={cast_id}>
                    <img src={IMG_URL + profile_path} alt="" />
                    <p>{name}</p>
                    <p>{character}</p>
                </li>
            ))}
                </ul>
                )}
        </>
    )
}