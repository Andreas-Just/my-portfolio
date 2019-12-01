import styled from 'styled-components';
import avatar from './img/avatar.svg';

export const Avatar = styled.img.attrs({
    src: `${avatar}`,
    alt: 'Photo',
  })`
  width: 300px;
  height: 300px;
  margin: 10px;
  border-radius: 50%;
`;
export const Name = styled.h1 `
  margin: 0 25px 30px;
  padding: 25px;
  border-radius: 5px;
  font-size: 40px;
  text-align: center;
  background-color: ${props => props.theme.bgHome};
  box-shadow: 0 0 20px 3px ${props => props.theme.shadowText};
`;
export const Specialty = styled(Name) `
  // padding: 0 0 35px;
  font-size: 32px;
  
`;
