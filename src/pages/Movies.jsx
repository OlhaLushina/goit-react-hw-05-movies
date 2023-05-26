import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from 'api';
import { Status } from 'global';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader/Loader';
import { ErrorMess } from 'components/ErrorMess/ErrorMess.styled';
import { MovieSearchbar } from 'components/MovieSearchbar/MovieSearchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Параметри рядка запиту
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const searchText = searchParams.get('query') ?? ''; // Значення для input із рядка запиту
  const location = useLocation(); // Об'єкт розташування у стеку історії навігації

  useEffect(() => {
    async function getSearch() {
      try {
        /* Задаємо статус */
        setStatus(Status.PENDING);

        /* Отримуємо список найпопулярніших фільмів на сьогодні */
        const data = await api.getMoviesSearch(searchText, 1);
        setMovies(data.results);

        /* Задаємо статус */
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);

        /* Задаємо статус */
        setStatus(Status.REJECTED);
      }
    }

    /* Викликаємо асинхрону функцію */
    getSearch();
  }, [searchText]);

  /* Зміна параметра пошуку */
  const updateSearchText = evt => {
    const query = evt.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <MovieSearchbar query={searchText} onChange={updateSearchText} />
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <ErrorMess>Помилка: {error.message}</ErrorMess>
      )}
      {status === Status.RESOLVED && movies && (
        <MoviesGallery movies={movies} location={location} />
      )}
      {status === Status.RESOLVED && movies.length === 0 && searchText && (
        <ErrorMess>Sorry. There are no images.</ErrorMess>
      )}
    </>
  );
};

export default Movies;
