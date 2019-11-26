import Portfolio from "./Portfolio";
import { connect } from 'react-redux';
import { chooseLanguage, changeFlag } from "../../store/actions";

function mapStateToProps(state) {
  return {
    dataLanguage: state.language,
    flag: state.flag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseLanguage: lang => dispatch(chooseLanguage(lang)),
    changeFlag: () => dispatch(changeFlag()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);