import About from './About';
import { connect } from 'react-redux';
import { chooseLanguage, changeSize } from '../../store/actions';

const mapStateToProps = (state) => ({
  dataLanguage: state.language.about,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeSize: (width, height) => dispatch(changeSize(width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);