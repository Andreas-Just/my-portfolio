import styled from 'styled-components';
import { VisuallyHidden } from '../../theme/globalStyle';
import html from './img/HTML.svg';
import css from './img/CSS.svg';
import js from './img/JavaScript.svg';

export const H2 = styled(VisuallyHidden) ``;
export const SoftSkills = styled.section `
  width: 80%;
  max-height: 55vh;
  margin: 0 40px;
  padding: 25px;
  border-radius: 5px;
  font-size: 18px;
  text-align: justify;
  overflow: auto;
  background-color: ${props => props.theme.bgHome};
  box-shadow: 0 0 20px 3px ${props => props.theme.shadowText};
`;
export const P = styled.p `
  margin: 0;
  margin-top: 10px;
  text-indent: 30px;
    
  &:first-of-type {
    margin-top: 0;
  }
`;
export const TechnicalSkills = styled.section `
  width: 90%;
  margin-top: 25px;
`;
export const SkillsList = styled.ul `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const SkillItem = styled.li `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  padding: 8px 16px;
  background-color: ${props => props.theme.bgSkills};
  border-top: 2px solid ${props => props.theme.colorSkills};
  box-shadow: inset 0 3px 10px 1px ${props => props.theme.shadowSkills};
`;
export const Title = styled.h3 `
  margin: 0;
  margin-bottom: 5px;
  font-size: 15px;
  text-align: center;
`;
export const IconHTML = styled.img.attrs({
  src: `${html}`,
  alt: 'HTML5',
  width: '80px',
})``;
export const IconCSS = styled.img.attrs({
  src: `${css}`,
  alt: 'CSS3',
  width: '80px',
})``;
export const IconJS = styled.img.attrs({
  src: `${js}`,
  alt: 'JavaScript',
  width: '80px',
})``;
