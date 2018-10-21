import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import route from '../rootroute'
import { Router } from 'react-router'
import {connect} from "react-redux";
import { LocaleProvider } from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';
// import intl from 'intl';
import en_US from '../entry/en-US'
import zh_CN from '../entry/zh-CN'
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en'
import { notification  } from 'antd'
notification.config({
	placement: 'bottomRight',
	bottom: 50,
	duration: 10,
})
addLocaleData([...en,...zh]);
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locale: 'CN'
		};
	}

	componentWillMount() {
		this.chooseLocale()
	}

	chooseLocale = () => {
		const {language='CN'}=this.props;
		switch(language){
			case 'EN':
				return en_US;
				break;
			case 'CN':
				return zh_CN;
				break;
			default:
				return en_US;
				break;
		}
	};
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
	render() {
		const { store, history } = this.props;
		return (
            <LocaleProvider locale={this.chooseLocale().antd}>
                <IntlProvider locale={this.chooseLocale().locale} messages={this.chooseLocale().messages}>
                    <Provider store={store}>
                        <Router history={history} routes={route} />
                    </Provider>
                </IntlProvider>
            </LocaleProvider>
		)
	}
}

function mapStateToProps(state, ownProps) {
	const {login,} = state;
	return {
		language:login.language,
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps)(App);
export default App;
