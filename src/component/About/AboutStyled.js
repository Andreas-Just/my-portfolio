import styled from 'styled-components';

export const Avatar = styled.img.attrs({
    src: ``,
    alt: 'Photo',
  })`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;
export const Name = styled.h1 `
  margin-top: 5px;
  padding: 25px;
  border-radius: 5px;
  font-size: 40px;
  text-align: center;
  background-color: ${props => props.theme.bg};
  box-shadow: 0 0 20px 3px ${props => props.theme.shadowText};
`;
export const Specialty = styled(Name) `
  // padding: 0 0 35px;
  font-size: 32px;
  
`;
