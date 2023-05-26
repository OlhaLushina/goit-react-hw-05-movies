import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'api';
import { Status } from 'global';
import { ErrorMess } from 'components/ErrorMess/ErrorMess.styled';
import { Loader } from 'components/Loader/Loader';
import { Item, List, Thumb } from './Cast.styled';
import NoMoviePoster from 'assets/no-user-image.jpg';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  /* Отримуємо id фільму із рядка запиту */
  const { movieId } = useParams();

  useEffect(() => {
    async function getActors() {
      try {
        /* Задаємо статус */
        setStatus(Status.PENDING);

        /* Отримуємо акторський склад фільму */
        const data = await api.getMovieActors(movieId);
        setActors(data);

        /* Задаємо статус */
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);

        /* Задаємо статус */
        setStatus(Status.REJECTED);
      }
    }

    /* Викликаємо асинхрону функцію */
    getActors();
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <ErrorMess>Помилка: {error.message}</ErrorMess>
      )}
      {status === Status.RESOLVED && actors && (
        <List>
          {actors.map(({ id, profile_path, name }) => (
            <Item key={id}>
              <Thumb>
                {' '}
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : NoMoviePoster
                  }
                  alt={name}
                />
              </Thumb>
              {name}
            </Item>
          ))}
        </List>
      )}

      {status === Status.RESOLVED && actors.length === 0 && (
        <div>We don't have any cast for this movie.</div>
      )}
    </>
  );
};

export default Cast;
