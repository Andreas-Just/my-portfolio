import styled, { keyframes } from 'styled-components';
import flagRu from './img/icon-flagRu.png';
import flagEng from './img/icon-flagEng.png';

export const Wrapper = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  width: 250px;
  transform: translate(-50%, -50%);
`;
const iconRotation = keyframes`
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(180deg);
  }
`;
const iconBackRotation = keyframes`
  0% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(0);
  }
`;
export const Button = styled.button `
  position: relative;
  display: block;
  width: 100%;
  margin: 70px 0;
  padding: 32px;
  font-size: 25px;
  font-family: inherit;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  background-color: lightsalmon;
  border: 1px solid coral;
  border-radius: 10px;
  cursor: pointer;
  
  ::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 10%;
    width: 64px;
    height: 64px;
    background-image: ${props => (props.ru ? `url(${flagRu})` : `url(${flagEng})`)};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    animation: ${iconBackRotation} 300ms ease-out backwards;
  }
  
  &:hover {
    background-color: coral;
    border: 1px solid tomato;
    ::before {
      background-color: coral;
      animation: ${iconRotation} 300ms ease-out forwards;
    }
  }
  &:focus {
    outline: none;
  }
`;
