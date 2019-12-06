import About from "./About";
import { connect } from 'react-redux';
import {changeSize, chooseLanguage} from "../../store/actions";

function mapStateToProps(state) {
  return {
    dataLanguage: state.language.about,
    flag: state.flag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseLanguage: lang => dispatch(chooseLanguage(lang)),
    changeSize: (width, height) => dispatch(changeSize(width, height)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);