import styled from 'styled-components';
import avatar from './img/avatar.svg';

export const Avatar = styled.img.attrs({
    src: `${avatar}`,
    alt: 'Photo',
  })`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;
