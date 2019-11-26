import Canvas from "./Canvas";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    flag: state.flag,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);