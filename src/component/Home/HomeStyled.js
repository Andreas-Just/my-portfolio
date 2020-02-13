import styled from 'styled-components';

export const SVG = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
  })`
  width: 17vw;
  height: 17vw;
  margin: 4vw;
  border-radius: 50%;
  filter: 
    drop-shadow(10px 10px 20px ${props => props.theme.shadowAvatar})
    drop-shadow(-2px 5px 20px ${props => props.theme.shadowAvatar});
`;
export const Name = styled.h1 `
  margin: 25px 25px 0;
  padding: 20px;
  border-radius: 5px;
  font-size: 2.5vw;
  text-align: center;
  background-color: ${props => props.theme.bgHome};
  box-shadow: 0 0 20px 3px ${props => props.theme.shadowText};
`;
export const Slogan = styled(Name) `
  margin: 0 25px 25px;
  font-size: 1.8vw;
  font-weight: 500;
`;
