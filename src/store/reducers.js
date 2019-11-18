import { ACTION_TYPE } from "./actions";

const initialState = {
  language: null,
  portfolioState: {
    eng: {
      lang: 'eng',
      name: 'Andrew Ivanchenko',
      menuNavigation: [
        {name: 'Home', to: '/home'},
        {name: 'Project', to: '/project'},
        {name: 'Contact', to: '/contact'},
        {name: 'About', to: '/about'},
      ],
    },
    ru: {
      lang: 'ru',
      name: 'Андрей Иванченко',
      menuNavigation: [
        {name: 'Главная', to: '/home'},
        {name: 'Проекты', to: '/project'},
        {name: 'Контакты', to: '/contact'},
        {name: 'Обо мне', to: '/about'},
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