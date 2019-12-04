import React, {useEffect} from 'react';
import { ThemeProvider } from "styled-components";

import { themeHome, themeSkills } from "../../theme/themeVariables";
import { SoftSkills, H2, P, TechnicalSkills, SkillsList, SkillItem } from "./AboutStyled";
import { MakeupSkills, ProgrammingSkills, OthersSkills } from "./Skills";
import {FONT_SIZE} from "../Canvas/Canvas";

const About = ({ changeSize, dataLanguage, flag }) => {
  console.log(document.body.scrollHeight);
  useEffect(() => {
    changeSize(window.innerWidth, document.body.scrollHeight, window.innerWidth/FONT_SIZE);
  });
  return (
    <ThemeProvider theme={themeHome}>
      <SoftSkills flag={flag}>
        <H2>Soft Skills</H2>
        { dataLanguage.text.map((item, index) => <P key={index}>{item}</P>) }
      </SoftSkills>
      <TechnicalSkills>
        <H2>TechnicalS kills</H2>
        <ThemeProvider theme={themeSkills}>
          <SkillsList>
            <SkillItem flag={flag}>
              <MakeupSkills />
            </SkillItem>
            <SkillItem flag={flag}>
              <ProgrammingSkills />
            </SkillItem>
            <SkillItem flag={flag}>
              <OthersSkills />
            </SkillItem>
          </SkillsList>
        </ThemeProvider>
      </TechnicalSkills>
    </ThemeProvider>
  );
};

export default About;