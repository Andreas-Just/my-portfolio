import Portfolio from './Portfolio';
import { connect } from 'react-redux';
import { chooseLanguage, changeFlag } from '../../store/actions';

const mapStateToProps = (state) => ({
  dataLanguage: state.language,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeFlag: () => dispatch(changeFlag()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);