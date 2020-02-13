import React, {Component} from 'react';
import { connect } from "react-redux";
import { changeSize, chooseLanguage } from "../../store/actions";

class Project extends Component {
  render() {
    return (
      <div>
        Project
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeSize: (width, height) => dispatch(changeSize(width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);