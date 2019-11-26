import styled from 'styled-components';

export const CanvasField = styled.canvas.attrs(({width, height}) => {
  return ({ width, height})
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
