import { ACTION_TYPE } from "./actions";

const initialState = {
  language: null,
  flag: false,
  portfolioState: {
    eng: {
      lang: 'eng',
      menuNavigation: [
        {name: 'Home', to: '/home'},
        {name: 'About me', to: '/about'},
        {name: 'Project', to: '/project'},
        {name: 'Contact', to: '/contact'},
      ],
      home: {
        name: 'Andrew Ivanchenko',
        specialty: 'Front-End Developer',
      },
      about: {
        name: 'Andrew Ivanchenko',
        specialty: 'Front-End Developer',
      },
      project: {
        name: 'Andrew Ivanchenko',
        specialty: 'Front-End Developer',
      },
      contact: {
        name: 'Andrew Ivanchenko',
        specialty: 'Front-End Developer',
      },
    },
    ru: {
      lang: 'ru',
      menuNavigation: [
        {name: 'Главная', to: '/home'},
        {name: 'Обо мне', to: '/about'},
        {name: 'Проекты', to: '/project'},
        {name: 'Контакты', to: '/contact'},
      ],
      home: {
        name: 'Андрей Иванченко',
        specialty: 'Front-End Разработчик',
      },
      about: {
        name: 'Andrew Ivanchenko',
        specialty: 'Front-End Developer',
      },
      project: {
        name: 'Andrew Ivanchenko',
        specialty: 'Front-End Developer',
      },
      contact: {
        name: 'Andrew Ivanchenko',
        specialty: 'Front-End Developer',
      },
    },
  },
};

export function getNextState(state = initialState, action) {
  // console.log(state);
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