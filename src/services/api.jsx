import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '089af85f0d558478de1e10d80ce20497',
};

export const getTrending = async () => {
  const { data } = await axios.get(`trending/all/day?`);
  return data.results;
};

export const searchMovies  = async (query) => {
  const {data} = await axios.get(`search/movie?query=${query}`);
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const {data} = await axios.get(`/movie/${movieId}?`);
  return data;
};

export const getMovieCredits = async (movieId) => {
  const {data} = await axios.get(`/movie/${movieId}/credits?`);
  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const {data} = await axios.get(`/movie/${movieId}/reviews?`);
  return data.results;
};
