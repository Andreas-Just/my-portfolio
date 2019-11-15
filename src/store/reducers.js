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
    default:
      return state;
  }
}