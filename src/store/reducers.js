import { ACTION_TYPE } from "./actions";

const initialState = {
  language: null,
  flag: false,
  portfolioState: {
    eng: {
      lang: 'eng',
      name: 'Andrew Ivanchenko',
      menuNavigation: [
        {name: 'Home', to: '/home'},
        {name: 'About me', to: '/about'},
        {name: 'Project', to: '/project'},
        {name: 'Contact', to: '/contact'},
      ],
    },
    ru: {
      lang: 'ru',
      name: 'Андрей Иванченко',
      menuNavigation: [
        {name: 'Главная', to: '/home'},
        {name: 'Обо мне', to: '/about'},
        {name: 'Проекты', to: '/project'},
        {name: 'Контакты', to: '/contact'},
      ],
    },
  },
  button: {
    text: 'like it',
    color: 'ButtonStart',
  },
};

export function getNextState(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ACTION_TYPE.SELECT_LANG:
      if (action.lang === 'ru') {
        return {
          ...state,
          language: state.portfolioState.ru
        };
      } else {
        return {
          ...state,
          language: state.portfolioState.eng
        };
      }
    case ACTION_TYPE.CHANGE_FLAG:
      return {
        ...state,
        flag: !state.flag
      };
    default:
      return state;
  }
}