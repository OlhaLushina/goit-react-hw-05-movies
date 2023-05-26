import PropTypes from 'prop-types';
import { Link } from './LinkGoBack.styled';

export const LinkGoBack = ({ to }) => {
  return <Link to={to}>Go back</Link>;
};

LinkGoBack.propTypes = {
  to: PropTypes.any.isRequired,
};
