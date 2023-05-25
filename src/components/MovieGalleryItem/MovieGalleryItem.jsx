import { Link, Title } from './MovieGalleryItem.styled';
/*import NoMoviePoster from 'assets/no-movie-poster.jpg';*/
const NoMoviePoster = '';

export const MovieGalleryItem = ({ movie: { id, poster_path, title } }) => {
  return (
    <Link to={`movies/${id}`}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : NoMoviePoster
        }
        alt={title}
        width="200"
      />
      <Title>{title}</Title>
    </Link>
  );
};
