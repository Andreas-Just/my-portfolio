import ChooseLanguage from "./ChooseLanguage";
import { connect } from 'react-redux';
import { chooseLanguage } from "../../store/actions";

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseLanguage: lang => dispatch(chooseLanguage(lang))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);