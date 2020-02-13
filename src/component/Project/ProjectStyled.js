import styled from 'styled-components';

export const WrapperProject = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
`;
export const SideBar = styled.div`
  width: 300px;
  box-shadow: inset -30px 0 35px -40px ${props => props.theme.shadowHeader};
`;
export const ProjectContent = styled.div`
  flex-grow: 1;
`;
