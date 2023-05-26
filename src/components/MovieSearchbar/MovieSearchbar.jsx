import PropTypes from 'prop-types';
import { Searchbar } from './MovieSearchbar.styled';

export const MovieSearchbar = ({ query, onChange }) => {
  return (
    <Searchbar>
      <input type="text" value={query} onChange={onChange} />
      <button>Search</button>
    </Searchbar>
  );
};

MovieSearchbar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
