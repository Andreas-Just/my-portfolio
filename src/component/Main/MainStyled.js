import styled from 'styled-components';

export const WrapperMain = styled.main `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  color: ${props => props.theme.colorMain};
`;
