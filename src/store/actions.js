export const ACTION_TYPE = {
  LOAD_DATA: 'LOAD_DATA',
  SELECT_LANG: 'SELECT_LANG',
  CHANGE_FLAG: 'CHANGE_FLAG',
  CHANGE_SIZE: 'CHANGE_SIZE',
};

/*const loadData = (data) => ({
  type: ACTION_TYPE.LOAD_DATA,
  data
});*/
/*export const chooseLanguage = (lang) => (
  async (dispatch) => {
    await fetch('https://andreas-just.github.io/library-json/CV/portfolio.json')
      .then(date => date.json())
      .then(data => dispatch(loadData(data)));
    await dispatch({
      type: ACTION_TYPE.SELECT_LANG,
      lang,
    })
  }
);*/
export const chooseLanguage = (lang) => ({
  type: ACTION_TYPE.SELECT_LANG,
  lang,
});
export const changeFlag = () => ({
  type: ACTION_TYPE.CHANGE_FLAG,
});
export const changeSize = (width, height) => ({
  type: ACTION_TYPE.CHANGE_SIZE,
  width,
  height
});
