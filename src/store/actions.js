export const ACTION_TYPE = {
  SELECT_LANG: 'select_lang',
};

export function chooseLanguage(lang) {
  return {
    type: ACTION_TYPE.SELECT_LANG,
    lang
  };
}