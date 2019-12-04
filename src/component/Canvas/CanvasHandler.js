import Canvas from "./Canvas";
import { connect } from 'react-redux';
import {changeSize} from "../../store/actions";

function mapStateToProps(state) {
  return {
    flag: state.flag,
    canvas: state.canvas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSize: (width, height, columns) => dispatch(changeSize(width, height, columns)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);