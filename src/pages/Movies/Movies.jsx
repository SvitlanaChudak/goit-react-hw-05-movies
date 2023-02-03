import { useState, useEffect } from "react";
import { searchMovies } from "services/api";
import { Link, useSearchParams, useLocation } from "react-router-dom";

export const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const searchQuery = searchParams.get('query');

    // useEffect(() => {
    //     const searchMovie = async () => {
    //         try {
    //             const response = await searchMovies(searchQuery);
    //             setMovies(response);
    //         } catch (error) {
    //             console.log('Error')
    //         };
    //         };
    //         searchMovie();
    //     }, [searchQuery]);

      useEffect(() => {
    searchQuery && searchMovies(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await searchMovies(query);
      setMovies(response);
      setSearchParams({ query });
    setQuery('');
    };
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>

             {movies.length > 0 && (
         <ul>
            {movies.map(({ id, poster_path, title, name }) => (
                    <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
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