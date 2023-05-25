import { Overview, Title } from './MovieCard.styled';

/*import NoMoviePoster from '../assets/no-movie-poster.jpg';*/
const NoMoviePoster = '';

export const MovieCard = ({ movie: { poster_path, title, overview } }) => {
  return (
    <>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : NoMoviePoster
          }
          alt={title}
          width="400"
        />
      </div>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </>
  );
};
