import Home from "./Home";
import { connect } from 'react-redux';
import {changeSize, chooseLanguage} from "../../store/actions";

function mapStateToProps(state) {
  return {
    dataLanguage: state.language.home,
    flag: state.flag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseLanguage: lang => dispatch(chooseLanguage(lang)),
    changeSize: (width, height) => dispatch(changeSize(width, height)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);