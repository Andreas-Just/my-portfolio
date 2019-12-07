import Project from "./Project";
import { connect } from 'react-redux';
import { chooseLanguage, changeSize } from "../../store/actions";

const mapStateToProps = (state) => ({
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeSize: (width, height) => dispatch(changeSize(width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);