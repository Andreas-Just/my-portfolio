import ChooseLanguage from "./ChooseLanguage";
import { connect } from 'react-redux';
import { chooseLanguage, changeButton } from "../../store/actions";

function mapStateToProps(state) {
  return {
    language: state.language,
    button: state.button,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseLanguage: lang => dispatch(chooseLanguage(lang)),
    changeButton: color => dispatch(changeButton(color)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);