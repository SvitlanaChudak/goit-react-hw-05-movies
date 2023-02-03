import { useState, useEffect } from "react";
import { getMovieCredits } from "services/api";
import { useParams } from 'react-router-dom';

export const Cast = () => {
    const { movieId } = useParams('movieId');
    const [cast, setCast] = useState([]);
    
        useEffect(() => {
        const getCast = async () => {
            try {
                const response = await getMovieCredits(movieId);
                setCast(response);
            } catch (error) {
                console.log('Error')
            };
            };
            getCast();
        }, [movieId]);
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            <ul>       
                {cast.map(({ id, profile_path, name, character }) => (
                    <li key={id}>
                        <img src={IMG_URL + profile_path} alt="" />
                        <h3>{name}</h3>
                        <p>Character: {character}</p>
                    </li>
                ))}
                </ul>
        </>
    )
}