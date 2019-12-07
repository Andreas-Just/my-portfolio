export const ACTION_TYPE = {
  LOAD_DATA: 'load_data',
  SELECT_LANG: 'select_lang',
  CHANGE_FLAG: 'change_flag',
  CHANGE_SIZE: 'change_size',
};

const loadData = (data) => ({
  type: ACTION_TYPE.LOAD_DATA,
  data
});
export const chooseLanguage = (lang) => (
  async (dispatch) => {
    await fetch('https://andreas-just.github.io/library-json/CV/portfolio.json')
      .then(date => date.json())
      .then(data => dispatch(loadData(data)));
    await dispatch({
      type: ACTION_TYPE.SELECT_LANG,
      lang,
    })
  }
);
/*export const chooseLanguage = (lang) => ({
  type: ACTION_TYPE.SELECT_LANG,
  lang,
});*/
export const changeFlag = () => ({
  type: ACTION_TYPE.CHANGE_FLAG,
});
export const changeSize = (width, height) => ({
  type: ACTION_TYPE.CHANGE_SIZE,
  width,
  height
});
