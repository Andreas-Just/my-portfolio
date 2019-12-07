import React from 'react';
import { WrapperIcon, Title, IconHTML, IconCSS, IconSASS, IconBootstrap, IconJS, IconReact, IconRedux, IconGit, IconWebpack, IconSQL, IconPhotoshop } from './AboutStyled';

export const MakeupSkills = () => {
  return (
    <>
      <WrapperIcon>
        <Title>HTML</Title>
        <IconHTML></IconHTML>
      </WrapperIcon>
      <WrapperIcon>
        <Title>CSS</Title>
        <IconCSS></IconCSS>
      </WrapperIcon>
      <WrapperIcon>
        <Title>SASS</Title>
        <IconSASS></IconSASS>
      </WrapperIcon>
      <WrapperIcon>
        <Title>Bootstrap</Title>
        <IconBootstrap></IconBootstrap>
      </WrapperIcon>
    </>
  );
};

export const ProgrammingSkills = () => {
  return (
    <>
      <WrapperIcon>
        <Title>JS</Title>
        <IconJS></IconJS>
      </WrapperIcon>
      <WrapperIcon>
        <Title>React</Title>
        <IconReact></IconReact>
      </WrapperIcon>
      <WrapperIcon>
        <Title>Redux</Title>
        <IconRedux></IconRedux>
      </WrapperIcon>
    </>
  );
};

export const OthersSkills = () => {
  return (
    <>
      <WrapperIcon>
        <Title>Git</Title>
        <IconGit></IconGit>
      </WrapperIcon>
      <WrapperIcon>
        <Title>Webpack</Title>
        <IconWebpack></IconWebpack>
      </WrapperIcon>
      <WrapperIcon>
        <Title>SQL</Title>
        <IconSQL></IconSQL>
      </WrapperIcon>
      <WrapperIcon>
        <Title>Photoshop</Title>
        <IconPhotoshop></IconPhotoshop>
      </WrapperIcon>
    </>
  );
};
