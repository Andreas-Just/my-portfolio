import React from 'react';
import { ThemeProvider } from "styled-components";

import { themeHome } from "../../theme/themeVariables";
import { Avatar, Name, Specialty } from "./HomeStyled";

const Home = ({ dataLanguage, flag }) => {
  return (
    <ThemeProvider theme={themeHome}>
      <Avatar />
      <Name flag={flag}>{ dataLanguage.name }</Name>
      <Specialty flag={flag}>{ dataLanguage.specialty }</Specialty>
    </ThemeProvider>
  );
};

export default Home;