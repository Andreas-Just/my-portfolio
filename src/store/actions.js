export const ACTION_TYPE = {
  SELECT_LANG: 'select_lang',
  CHANGE_FLAG: 'change_flag',
  CHANGE_SIZE: 'change_size',
};

export function chooseLanguage(lang) {
  return {
    type: ACTION_TYPE.SELECT_LANG,
    lang
  };
}
export function changeFlag() {
  return {
    type: ACTION_TYPE.CHANGE_FLAG,
  };
}
export function changeSize(width, height, columns) {
  return {
    type: ACTION_TYPE.CHANGE_SIZE,
    width,
    height
  };
}
