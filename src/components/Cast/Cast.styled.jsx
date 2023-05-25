import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0 0 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  text-align: center;
  text-decoration: none;
  list-style: none;
`;
