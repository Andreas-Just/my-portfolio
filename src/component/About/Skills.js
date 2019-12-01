import React from 'react';
import { Title, IconHTML, IconCSS, IconJS } from "./AboutStyled";

export const MakeupSkills = () => {
  return (
    <>
      <div>
        <Title>HTML</Title>
        <IconHTML></IconHTML>
      </div>
      <div>
        <Title>CSS</Title>
        <IconCSS></IconCSS>
      </div>
      <div>
        <Title>Java Script</Title>
        <IconJS></IconJS>
      </div>
    </>
  );
};