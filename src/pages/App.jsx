import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
</Routes>
    </>
  );
};


