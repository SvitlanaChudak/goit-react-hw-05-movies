import { useState, useEffect } from "react";
import { searchMovies } from "services/api";

export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const searchMovie = async () => {
            try {
                const result = await searchMovies();
                setMovie(result);
                setPage(page);
            } catch (error) {
                console.log('Error')
            };
            };
            searchMovie();
        });

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchQuery(searchQuery);
    setMovie([]);
    setPage(1);
    setSearchQuery('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleChange} name={movie} />
            <button type="submit">Search</button>
        </form>
    )
}