import ChooseLanguage from './ChooseLanguage';
import { connect } from 'react-redux';
import { chooseLanguage, changeFlag } from '../../store/actions';

const mapStateToProps = (state) => ({
  language: state.language,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeFlag: () => dispatch(changeFlag()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);