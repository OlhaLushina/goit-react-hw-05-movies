import { Item, List, NavLink } from './MovieCardNav.styled';

export const MovieCardNav = () => {
  return (
    <List>
      <Item>
        <NavLink to="cast">Cast</NavLink>
      </Item>
      <Item>
        <NavLink to="reviews">Reviews</NavLink>
      </Item>
    </List>
  );
};
