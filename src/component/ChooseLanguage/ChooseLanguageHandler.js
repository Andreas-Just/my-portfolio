import ChooseLanguage from "./ChooseLanguage";
import { connect } from 'react-redux';
import { chooseLanguage, changeFlag } from "../../store/actions";

function mapStateToProps(state) {
  return {
    language: state.language,
    flag: state.flag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseLanguage: lang => dispatch(chooseLanguage(lang)),
    changeFlag: () => dispatch(changeFlag()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);