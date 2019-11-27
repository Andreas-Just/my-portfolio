export const themeNav = {
  bg: props => (props.flag ? `rgba(255,244,224,.85)` : `rgba(12,17,25,.75)`),
  color: props => (props.flag === 'true' ? `#876043` : `lightsteelblue`),
  bgActive: props => (props.flag === 'true' ? `#F7E5D1` : `#111B2A`),
  colorActive: props => (props.flag === 'true' ? `#312112` : `lightcyan`),
  shadowHeader: props => (props.flag ? `#876043` : `rgba(70,130,180,.7)`),
  shadowItem: props => (props.flag === 'true' ? `#876043` : `rgba(70,130,180,.9)`),
};
export const themeMain = {
  // bg: props => (props.flag ? `#FFF4E0` : `#0C1119`),
  color: props => (props.flag ? `#312112` : `lightcyan`),
};
export const themeHome = {
  bg: props => (props.flag ? `rgba(255,244,224,.8)` : `rgba(12,17,25,.6)`),
  shadowText: props => (props.flag ? `#876043` : `rgba(70,130,180,.7)`),
};
