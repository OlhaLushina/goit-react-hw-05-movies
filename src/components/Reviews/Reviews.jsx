import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'api';
import { Status } from 'global';
import { ErrorMess } from 'components/ErrorMess/ErrorMess.styled';
import { Loader } from 'components/Loader/Loader';
import { Item, List, Name } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  /* Отримуємо id фільму із рядка запиту */
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        /* Задаємо статус */
        setStatus(Status.PENDING);

        /* Отримуємо акторський склад фільму */
        const data = await api.getMovieReviews(movieId);
        setReviews(data);

        /* Задаємо статус */
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);

        /* Задаємо статус */
        setStatus(Status.REJECTED);
      }
    }

    /* Викликаємо асинхрону функцію */
    getReviews();
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <ErrorMess>Помилка: {error.message}</ErrorMess>
      )}
      {status === Status.RESOLVED && reviews && (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Name>{author}</Name>
              <div>{content}</div>
            </Item>
          ))}
        </List>
      )}
      {status === Status.RESOLVED && reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;
