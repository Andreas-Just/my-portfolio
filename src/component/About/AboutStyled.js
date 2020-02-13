import styled from 'styled-components';
import html from './img/HTML.svg';
import css from './img/CSS.svg';
import sass from './img/SASS.svg';
import bootstrap from './img/Bootstrap.svg';
import js from './img/JavaScript.svg';
import react from './img/React.svg';
import redux from './img/Redux.svg';
import git from './img/Git.svg';
import webpack from './img/Webpack.svg';
import sql from './img/SQL.svg';
import photoshop from './img/Photoshop.svg';

export const H2 = styled.h2 `
  margin: 0;
  margin-bottom: 1vw;
  font-size: 2.5vw;
  text-align: center;
`;
export const TechnicalSkills = styled.section `
  width: 85vw;
  margin: 25px 25px 0;
`;
export const SkillsList = styled.ul `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
export const SkillItem = styled.li `
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: .8vw 1.2vw;
  background-color: ${props => props.theme.bgSkills};
  border-bottom: 2px solid ${props => props.theme.colorSkills};
  box-shadow: inset 0 -1px 10px 1px ${props => props.theme.shadowSkills};
  &:nth-child(2) { 
    margin: 0 1.2vw;
  }
`;
export const WrapperIcon = styled.div `
  &:nth-child(2n) { 
    margin: 0 1vw;
  }
  &:last-child { 
    margin-right: 0;
  }
`;
export const Title = styled.h3 `
  margin: 0;
  margin-bottom: .5vw;
  font-size: 1vw;
  text-align: center;
`;
export const IconHTML = styled.img.attrs({
  src: `${html}`,
  alt: 'HTML5',
})`
  height: 6vw;
`;
export const IconCSS = styled(IconHTML).attrs({
  src: `${css}`,
  alt: 'CSS3',
})``;
export const IconSASS = styled(IconHTML).attrs({
  src: `${sass}`,
  alt: 'SASS',
})``;
export const IconBootstrap = styled(IconHTML).attrs({
  src: `${bootstrap}`,
  alt: 'Bootstrap',
})``;
export const IconJS = styled(IconHTML).attrs({
  src: `${js}`,
  alt: 'JavaScript',
})``;
export const IconReact = styled(IconHTML).attrs({
  src: `${react}`,
  alt: 'React',
})``;
export const IconRedux = styled(IconHTML).attrs({
  src: `${redux}`,
  alt: 'Redux',
})``;
export const IconGit = styled(IconHTML).attrs({
  src: `${git}`,
  alt: 'Git',
})``;
export const IconWebpack = styled(IconHTML).attrs({
  src: `${webpack}`,
  alt: 'Webpack',
})``;
export const IconSQL = styled(IconHTML).attrs({
  src: `${sql}`,
  alt: 'SQL',
})``;
export const IconPhotoshop = styled(IconHTML).attrs({
  src: `${photoshop}`,
  alt: 'Photoshop',
})``;
export const SoftSkills = styled.section `
  width: 85vw;
  margin: 40px 25px;
  padding: 2.5vw;
  padding-top: 1vw;
  border-radius: 5px;
  font-size: 1.35vw;
  text-align: justify;
  background-color: ${props => props.theme.bgHome};
  box-shadow: 0 0 20px 3px ${props => props.theme.shadowText};
`;
export const P = styled.p `
  margin: 0;
  margin-top: 1vw;
  text-indent: 3.5vw;
    
  &:first-of-type {
    margin-top: 0;
  }
`;
