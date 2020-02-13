import React from 'react';
import {
  WrapperIcon, Title, IconHTML, IconCSS, IconSASS, IconBootstrap,
  IconJS, IconReact, IconRedux, IconGit, IconWebpack, IconSQL,
  IconPhotoshop
} from './AboutStyled';

export const MakeupSkills = () => {
  return (
    <>
      <WrapperIcon>
        <Title>HTML</Title>
        <IconHTML />
      </WrapperIcon>
      <WrapperIcon>
        <Title>CSS</Title>
        <IconCSS />
      </WrapperIcon>
      <WrapperIcon>
        <Title>SASS</Title>
        <IconSASS />
      </WrapperIcon>
      <WrapperIcon>
        <Title>Bootstrap</Title>
        <IconBootstrap />
      </WrapperIcon>
    </>
  );
};

export const ProgrammingSkills = () => {
  return (
    <>
      <WrapperIcon>
        <Title>JS</Title>
        <IconJS />
      </WrapperIcon>
      <WrapperIcon>
        <Title>React</Title>
        <IconReact />
      </WrapperIcon>
      <WrapperIcon>
        <Title>Redux</Title>
        <IconRedux />
      </WrapperIcon>
    </>
  );
};

export const OthersSkills = () => {
  return (
    <>
      <WrapperIcon>
        <Title>Git</Title>
        <IconGit />
      </WrapperIcon>
      <WrapperIcon>
        <Title>Webpack</Title>
        <IconWebpack />
      </WrapperIcon>
      <WrapperIcon>
        <Title>SQL</Title>
        <IconSQL />
      </WrapperIcon>
      <WrapperIcon>
        <Title>Photoshop</Title>
        <IconPhotoshop />
      </WrapperIcon>
    </>
  );
};
