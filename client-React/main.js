"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import store from "./public/store/store";
import AppComponent from './public/core/component/appComponent.jsx';
import HomeComponent from './public/core/component/homeComponent.jsx';
import LoginComponent from './public/user/component/loginComponent.jsx';
import "./public/core/style/main.scss";

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={AppComponent}>
				<Route path='/' component={HomeComponent} />
				<Route path='/login' component={LoginComponent} />
			</Route>
		</Router>
	</Provider>
	), document.getElementById('content'));