import { useState, useEffect } from "react";
import { searchMovies } from "services/api";
import { useSearchParams, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { toast, Toaster } from 'react-hot-toast';
import { List, Image, Container, Item, Title, Form, SearchInput, SearchButton, MovieLink } from "./Movies.styled";

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

    return (
        <Container>
            <Toaster />
        <Form onSubmit={handleSubmit}>
            <SearchInput type="text" value={query} onChange={handleChange}/>
            <SearchButton type="submit">Search</SearchButton>
        </Form>

            {isLoading && <Loader />}

         <List>
            {movies.map(({ id, poster_path, title, name }) => (
                    <Item key={id}>
                    <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                            <Image src={poster_path && poster_path  !== null
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://i.ibb.co/Mg2D0bG/no-image-available.webp`} alt="" width='300'/>
                            <Title>{title || name}</Title>
                    </MovieLink>
                </Item>
            ))}
                </List>
            </Container>
    )
}