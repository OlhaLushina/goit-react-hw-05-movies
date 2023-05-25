import * as api from 'api';
import { Status } from 'global';
import { ErrorMess } from 'components/ErrorMess/ErrorMess.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieCardNav } from 'components/MovieCardNav/MovieCardNav';
const { useEffect, useState } = require('react');
const { useParams, Outlet } = require('react-router-dom');

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  /* Отримуємо id фільму із рядка запиту */
  const { movieId } = useParams();

  useEffect(() => {
    async function getDetails() {
      try {
        /* Задаємо статус */
        setStatus(Status.PENDING);

        /* Отримуємо список найпопулярніших фільмів на сьогодні */
        const data = await api.getMovieDetails(movieId);
        setMovie(data);

        /* Задаємо статус */
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);

        /* Задаємо статус */
        setStatus(Status.REJECTED);
      }
    }

    /* Викликаємо асинхрону функцію */
    getDetails();
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <ErrorMess>Помилка: {error.message}</ErrorMess>
      )}
      {status === Status.RESOLVED && movie && <MovieCard movie={movie} />}
      <MovieCardNav />
      <Outlet />
    </>
  );
};

export default MovieDetails;
