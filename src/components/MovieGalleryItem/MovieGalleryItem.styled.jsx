import styled from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';

export const Link = styled(LinkStyled)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  text-align: center;
  text-decoration: none;

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

export const Title = styled.div`
  color: #000;
`;
