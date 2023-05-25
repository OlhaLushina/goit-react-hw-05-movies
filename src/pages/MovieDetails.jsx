import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import * as api from 'api';
import { Status } from 'global';
import { ErrorMess } from 'components/ErrorMess/ErrorMess.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieCardNav } from 'components/MovieCardNav/MovieCardNav';
import { LinkGoBack } from 'components/LinkGoBack/LinkGoBack';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation(); // Об'єкт розташування у стеку історії навігації

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
      <LinkGoBack to={location.state?.from ?? '/'}>Go back</LinkGoBack>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <ErrorMess>Помилка: {error.message}</ErrorMess>
      )}
      {status === Status.RESOLVED && movie && <MovieCard movie={movie} />}
      <MovieCardNav />
      <Suspense fallback={<div>Loading...</div>}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
