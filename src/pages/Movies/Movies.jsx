import { useState, useEffect } from "react";
import { searchMovies } from "services/api";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { toast, Toaster } from 'react-hot-toast';

export const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const searchQuery = searchParams.get('query');

    useEffect(() => {
        const searchMovie = async () => {
                  if (!searchQuery) {
        return;
      }
            try {
                setIsLoading(true);
                const response = await searchMovies(searchQuery);
                if (response.length !== 0) {
                    setMovies(response);
                    toast.success('Movie found');
        }
        else {
        toast.error('Movie not found');
      }
            } catch (error) {
                console.log('Error')
            } finally {
                setIsLoading(false);
            }
            };
            searchMovie();
        }, [searchQuery]);

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
      event.preventDefault();
      if (query.trim() === '') {
      return toast.error('Please enter something');
    }
    setSearchParams({ query });
    setQuery('');
    };
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            <Toaster />
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>

            {isLoading && <Loader />}

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
            </>
    )
}