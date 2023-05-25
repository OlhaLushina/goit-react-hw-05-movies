import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
import { Item, List } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <MovieGalleryItem movie={movie} />
        </Item>
      ))}
    </List>
  );
};
