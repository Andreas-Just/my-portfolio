import Canvas from './Canvas';
import { connect } from 'react-redux';
import { changeSize } from '../../store/actions';

const mapStateToProps = (state) => ({
  flag: state.flag,
  canvas: state.canvas,
});

const mapDispatchToProps = (dispatch) => ({
  changeSize: (width, height) => dispatch(changeSize(width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);