const { useEffect } = require('react');
const { useParams, Outlet, NavLink } = require('react-router-dom');

const MovieDetails = () => {
  const { movieId } = useParams();
  useEffect(() => {
    console.log(movieId);
  }, [movieId]);
  return (
    <div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      MovieId - {movieId}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
