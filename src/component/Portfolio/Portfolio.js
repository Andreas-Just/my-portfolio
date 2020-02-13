import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeNav, themeMain } from '../../theme/themeVariables';
import Header from "../Header";
import Main from "../Main";


const Portfolio = () => (
  <>
    <ThemeProvider theme={themeNav}>
      <Header />
    </ThemeProvider>
    <ThemeProvider theme={themeMain}>
      <Main />
    </ThemeProvider>
  </>
);

export default Portfolio;