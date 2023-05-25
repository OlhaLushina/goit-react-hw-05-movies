import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from 'api';
import { Status } from 'global';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader/Loader';
import { ErrorMess } from 'components/ErrorMess/ErrorMess.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation(); // Об'єкт розташування у стеку історії навігації

  useEffect(() => {
    async function getTrending() {
      try {
        /* Задаємо статус */
        setStatus(Status.PENDING);

        /* Отримуємо список найпопулярніших фільмів на сьогодні */
        const data = await api.getMoviesTrending();
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
    getTrending();
  }, []);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <ErrorMess>Помилка: {error.message}</ErrorMess>
      )}
      {status === Status.RESOLVED && movies && (
        <MoviesGallery movies={movies} location={location} />
      )}
    </>
  );
};

export default Home;
