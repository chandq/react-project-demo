import "babel-polyfill";
import React from 'react';
import {render} from "react-dom";
import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import './config';
import App from './pages/App';
import configureStore from "./store/configureStore";
// import registerServiceWorker from './registerServiceWorker';
import useBasename from "history/lib/useBasename";
import moment from "moment";
require("./style/common/common.scss");

/*window.paceOptions = {
	// document: true,
	eventLag: true,
	ajax: {
		trackMethods: ['GET', 'POST', 'PUT', 'DELETE']
	},
	target: '#pace-progressbar'
};
require('components/pace/pace.js');
require('style/common/pace.css');*/
moment.locale(locale);
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
if(process.env.NODE_ENV === 'production'){
	require('style/common/antd.min.css')
	render(
		<App store={store} history={useBasename(() => history)({ basename: process.env.PUBLIC_URL })} />,
		document.getElementById('root')
	)
}else{
	require('style/common/antd.css')
	render(
		<App store={store} history={useBasename(() => history)({ basename: `/` })} />,
		document.getElementById('root')
	)
}
// registerServiceWorker();
