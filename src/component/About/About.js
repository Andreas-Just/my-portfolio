import React from 'react';
import {ThemeProvider} from "styled-components";

import { Avatar, Name, Specialty } from "../About/AboutStyled";
import { themeHome } from "../../theme/themeVariables";

const About = ({ dataLanguage, flag }) => {
  return (
    <ThemeProvider theme={themeHome}>
      <Name flag={flag}>{ dataLanguage.name }</Name>
      <Specialty flag={flag}>{ dataLanguage.specialty }</Specialty>
    </ThemeProvider>
  );
};

export default About;