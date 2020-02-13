export const themeNav = {
  bgNav: props => (props.flag ? `rgba(225,207,192,.85)` : `rgba(17,27,42,.9)`),
  colorNav: props => (props.flag === 'true' ? `#876043` : `lightsteelblue`),
  bgActive: props => (props.flag === 'true' ? `#D4B29E` : `#18273D`),
  colorActive: props => (props.flag === 'true' ? `#312112` : `lightcyan`),
  shadowHeader: props => (props.flag ? `#876043` : `rgba(70,130,180,.7)`),
  shadowItem: props => (props.flag === 'true' ? `#876043` : `rgba(70,130,180,.9)`),
};
export const themeMain = {
  colorMain: props => (props.flag ? `#312112` : `lightcyan`),
};
export const themeHome = {
  bgHome: props => (props.flag ? `rgba(255,244,224,.8)` : `rgba(12,17,25,.6)`),
  shadowText: props => (props.flag ? `rgba(135,96,67,.3)` : `rgba(70,130,180,.5)`),
  shadowAvatar: props => (props.flag ? `rgba(135,96,67,.45)` : `rgba(70,130,180,.4)`),
};
export const themeSkills = {
  bgSkills: props => (props.flag ? `rgba(255,244,224,.85)` : `rgba(12,17,25,.75)`),
  colorSkills: props => (props.flag ? `#876043` : `lightsteelblue`),
  shadowSkills: props => (props.flag ? `#876043` : `rgba(70,130,180,.7)`),
};
