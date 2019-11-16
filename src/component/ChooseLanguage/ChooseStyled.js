import styled from 'styled-components';

export const Wrapper = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  transform: translate(-50%, -50%);
`;
export const Button = styled.button `
  display: block;
  width: 100%;
  margin: 50px 0;
  padding: 20px;
  font-size: 22px;
  font-family: inherit;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  background-color: lightsalmon;
  border: 1px solid lightgoldenrodyellow;
  border-radius: 10px;
  cursor: pointer;
  
  ::before {
    content: ${props => (props)};
  }
`;
