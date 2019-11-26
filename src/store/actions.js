export const ACTION_TYPE = {
  SELECT_LANG: 'select_lang',
  CHANGE_FLAG: 'change_flag',

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
