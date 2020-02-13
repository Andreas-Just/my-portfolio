import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { changeSize, chooseLanguage } from "../../store/actions";

import { ThemeProvider } from 'styled-components';
import { themeHome, themeSkills } from '../../theme/themeVariables';
import { SoftSkills, H2, P, TechnicalSkills, SkillsList, SkillItem } from './AboutStyled';
import { MakeupSkills, ProgrammingSkills, OthersSkills } from './Skills';

const About = ({ changeSize, dataLanguage, flag }) => {
  useEffect(() => {
    setTimeout(() =>
        changeSize(document.documentElement.clientWidth, document.body.scrollHeight),
      200
    )
  });
  return (
    <ThemeProvider theme={themeHome}>
      <TechnicalSkills>
        <H2>Technical skills</H2>
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
      <SoftSkills flag={flag}>
        <H2>Soft skills</H2>
        { dataLanguage.text.map((item, index) => <P key={index}>{item}</P>) }
      </SoftSkills>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  dataLanguage: state.language.about,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeSize: (width, height) => dispatch(changeSize(width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);