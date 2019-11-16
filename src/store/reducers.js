import { ACTION_TYPE } from "./actions";

const initialState = {
  language: null,
  portfolioState: {
    eng: {
      lang: 'eng',
      name: 'Andrew Ivanchenko',
      menuNavigation: [
        {name: 'Home', to: '/Home'},
        {name: 'Project', to: '/Project'},
        {name: 'Contact', to: '/Contact'},
        {name: 'About', to: '/About'},
      ],
    },
    ru: {
      lang: 'ru',
      name: 'Андрей Иванченко',
      menuNavigation: [
        {name: 'Главная', to: '/Home'},
        {name: 'Проекты', to: '/Project'},
        {name: 'Контакты', to: '/Contact'},
        {name: 'Обо мне', to: '/About'},
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
    case ACTION_TYPE.CHANGE_BUTTON:
      if (action.color === 'ButtonStart') {
        return {
          ...state,
          button: {
            text: 'liked',
            color: 'ButtonOne',
          },
        };
      }
      if (action.color === 'ButtonOne') {
        return {
          ...state,
          button: {
            text: 'dislike',
            color: 'ButtonTwo',
          },
        };
      }
      if (action.color === 'ButtonTwo') {
        return {
          ...state,
          button: {
            text: 'like it',
            color: 'Button',
          },
        };
      }
    default:
      return state;
  }
}