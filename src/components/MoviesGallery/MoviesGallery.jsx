import PropTypes from 'prop-types';
import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
import { Item, List } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies, location }) => {
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <MovieGalleryItem movie={movie} location={location} />
        </Item>
      ))}
    </List>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()),
  location: PropTypes.shape().isRequired,
};
