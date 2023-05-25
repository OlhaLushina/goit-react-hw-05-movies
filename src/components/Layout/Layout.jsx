import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Item, List, Main, NavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <List>
          <Item>
            <NavLink to="/">Home</NavLink>
          </Item>
          <Item>
            <NavLink to="/movies">Movies</NavLink>
          </Item>
        </List>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <footer></footer>
    </div>
  );
};
