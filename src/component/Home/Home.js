import React from 'react';
import {ThemeProvider} from "styled-components";

import { Avatar, Name, Specialty } from "../Home/HomeStyled";
import { themeHome } from "../../theme/themeVariables";

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