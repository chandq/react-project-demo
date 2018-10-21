import React, {Component} from "react";
import {browserHistory} from 'react-router';
import HomePage from "./homePage";
const style = require('../../../style/app.scss');
class AppPortal extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.app}>
        {this.props.children || <HomePage />}
      </div>

    )
  }
}
// function mapStateToProps(state) {
// 	const {login} = state;
// 	return {
// 		login
// 	}
// }
// module.exports = connect(mapStateToProps)(App);
export default AppPortal;