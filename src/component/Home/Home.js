import React, { useEffect } from 'react';
import { ThemeProvider } from "styled-components";

import { themeHome } from "../../theme/themeVariables";
import { Avatar, Name, Specialty } from "./HomeStyled";

const Home = ({ changeSize, dataLanguage, flag }) => {
  useEffect(() => {
    setTimeout(
      () => changeSize(window.innerWidth, document.body.scrollHeight),
      300
    )
  });
  return (
    <ThemeProvider theme={themeHome}>
      <Avatar />
      <Name flag={flag}>{ dataLanguage.name }</Name>
      <Specialty flag={flag}>{ dataLanguage.specialty }</Specialty>
    </ThemeProvider>
  );
};

export default Home;