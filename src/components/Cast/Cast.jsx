import { useState, useEffect } from "react";
import { getMovieCredits } from "services/api";
import { useParams } from 'react-router-dom';
import { Container, List, Item, Image } from "./Cast.styled";

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

    return (
        <Container>
            {cast.length !== 0 ? (
            <List>       
                {cast.map(({ id, profile_path, name, character }) => (
                    <Item key={id}>
                        <Image src={profile_path && profile_path  !== null
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : `https://i.ibb.co/Mg2D0bG/no-image-available.webp`} alt="" width='150'/>
                        <h3>{name}</h3>
                        <p>Character: {character}</p>
                    </Item>
                ))}
                </List>
                 ) : (
            <p>We don`t have any cast information for this movie.</p>
          )}
        </Container>
    )
}