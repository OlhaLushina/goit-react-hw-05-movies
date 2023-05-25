import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
  padding: 20px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export const Item = styled.li`
  list-style: none;
`;

export const NavLink = styled(NavLinkStyled)`
  padding: 10px;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;

  &.active {
    text-decoration: underline;
  }
`;
