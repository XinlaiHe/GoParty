'use strict';
import store from '../store.js';
import actionTypes from "./actionTypes";
import axios from "axios";

function afterRegister(username) {
    return { type: actionTypes.USERREGISTER, username };
}

function afterLogin(username) {
    return { type: actionTypes.USERLOGIN, username };
}

export function register(username, password) {
	return function(dispatch) {
		return serverRegiter(username, password).then(response => {
			dispatch(afterRegister(username));
		}).then(() => console.log("User Successfully Registered"))
		.catch(error => console.log(error));
	}
}

export function login(username, password) {
	return function(dispatch) {
		return serverLogin(username, password).then(response => {
			dispatch(afterLogin(username));
		}).then(() => console.log("User Successfully Logged in"))
		.catch(error => console.log(error));
	}
}

function serverRegiter(username, password) {
	return axios.post("http://localhost:8080/user/register", { username, password });
}

function serverLogin(username, password) {
	return axios.post("http://localhost:8080/user/login", { username, password });
}