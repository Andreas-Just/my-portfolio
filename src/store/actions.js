export const ACTION_TYPE = {
  SELECT_LANG: 'select_lang',
  CHANGE_BUTTON: 'change_button',

};

export function chooseLanguage(lang) {
  return {
    type: ACTION_TYPE.SELECT_LANG,
    lang
  };
}

export function changeButton(color) {
  return {
    type: ACTION_TYPE.CHANGE_BUTTON,
    color
  };
}
