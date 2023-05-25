import * as api from 'api';
import { Status } from 'global';
import { ErrorMess } from 'components/ErrorMess/ErrorMess.styled';
import { Loader } from 'components/Loader/Loader';
import { Item, List } from './Cast.styled';
/*import NoMoviePoster from '../assets/no-movie-poster.jpg';*/
const NoMoviePoster = '';
const { useEffect, useState } = require('react');
const { useParams } = require('react-router-dom');

export const Cast = () => {
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
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : NoMoviePoster
                }
                alt={name}
                width="200"
              />
              {name}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
