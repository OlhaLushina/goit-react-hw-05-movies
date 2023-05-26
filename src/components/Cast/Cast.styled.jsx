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

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    transform: scale(1);
    transition: transform 250ms linear 0s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Thumb = styled.div`
  width: 200px;
  height: 300px;
`;
