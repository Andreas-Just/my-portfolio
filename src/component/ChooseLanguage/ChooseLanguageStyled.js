import styled, { keyframes } from 'styled-components';
import flagRu from './img/icon-flagRu.png';
import flagEng from './img/icon-flagEng.png';

export const Wrapper = styled.div `
  margin: auto;
  width: calc(100vw - 16px);
  height: 100vh;
`;
export const WrapperButton = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const iconRotation = keyframes`
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(180deg);
  }
`;
export const iconBackRotation = keyframes`
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
  width: 250px;
  margin: 5vh 0;
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
    background-color: transparent;
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
      animation: ${iconRotation} 300ms ease-out forwards;
    }
  }
  &:focus {
    outline: none;
  }
`;
