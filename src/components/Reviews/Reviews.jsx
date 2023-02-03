import { getMovieReviews } from "services/api";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const Reviews = () => {
  const { movieId } = useParams('movieId');
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await getMovieReviews(movieId);
                setReviews(response);
            } catch (error) {
                console.log('Error')
            };
            };
            getReviews();
        }, [movieId]);

    return (
    <>
        {reviews.length !== 0 ? (
            <ul>
              {reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              ))}
          </ul>
        ) : (
            <p>We don`t have any reviews for this movie.</p>
          )}
      </>
    )
    
}
