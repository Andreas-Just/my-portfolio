import React from 'react';
import { Avatar } from "../Home/HomeStyled";

const Home = ({ dataLanguage }) => {
  return (
    <>
      <Avatar />
      <h1>{ dataLanguage.name }</h1>
    </>
  );
};

export default Home;