import styled from 'styled-components';
import avatar from './img/avatar.jpg';

export const Avatar = styled.img.attrs({
    src: `${avatar}`,
    alt: 'Photo',
  })`
  width: 400px;
  height: 400px;
  border: 1px solid grey;
  border-radius: 50%;
`;
