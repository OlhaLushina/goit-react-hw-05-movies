import axios from 'axios';
const API_KEY = '34e68a416eb051ec4adf34df5a0038fd';
const BASE_URL = 'https://api.themoviedb.org/3';
//const PER_PAGE = 12; // скільки виводити на сторінку зображень

/* Список найпопулярніших фільмів на сьогодні */
export const getMoviesTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

/* Список фільмів за результатами пошуку */
export const getMoviesSearch = async page => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

/* Детальна інформація про фільм */
export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

/* Акторський склад фільму */
export const getMovieActors = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

/* Відгуки про фільм */
export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};
