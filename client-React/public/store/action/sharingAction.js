'use strict';
import store from '../store.js';
import actionTypes from "./actionTypes";
import axios from "axios";

function initializeSharings(sharings) {
    return { type: actionTypes.LOADSHARINGS, sharings };
}

export function loadSharings() {
    return function (dispatch) {
	    return getSharingsFromServer().then((response) => {
	    	dispatch(initializeSharings(response.data));
	    }).then(() => console.log('After Loading Sharings', store.getState()))
	    .catch(error => console.log(error));
  	}
}

function getSharingsFromServer() {
  return axios.get('http://localhost:8080/sharings');
}

function getPartyByNameFromServer(name) {
  return axios.get('http://localhost:8080/sharings' + "/" + name);
}