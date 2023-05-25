import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #000;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
`;

export const NavLink = styled(NavLinkStyled)`
  padding: 10px;
  color: #000;
  text-decoration: none;
  border-radius: 4px;

  &.active {
    color: #fff;
    background-color: #3f51b5;
  }
`;

export const Main = styled.main`
  max-width: 900px;
  margin: 40px auto;
`;
