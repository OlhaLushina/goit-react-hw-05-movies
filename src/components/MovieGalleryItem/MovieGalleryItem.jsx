import PropTypes from 'prop-types';
import { Link, Thumb, Title } from './MovieGalleryItem.styled';
import NoMoviePoster from 'assets/no-movie-poster.jpg';

export const MovieGalleryItem = ({
  movie: { id, poster_path, title },
  location,
}) => {
  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <Thumb>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : NoMoviePoster
          }
          alt={title}
        />
      </Thumb>
      <Title>{title}</Title>
    </Link>
  );
};

MovieGalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape().isRequired,
};
