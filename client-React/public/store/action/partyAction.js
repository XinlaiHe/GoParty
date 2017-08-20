'use strict';
import store from '../store.js';
import actionTypes from "./actionTypes";
import axios from "axios";

function initializeParties(parties) {
    return { type: actionTypes.LOADPARTIES, parties };
}

export function loadParties() {
    return function (dispatch) {
	    return getPartiesFromServer().then((response) => {
	    	dispatch(initializeParties(response.data));
	    }).then(() => console.log('After Loading Parties', store.getState()))
	    .catch(error => console.log(error));
  	}
}

function getPartiesFromServer() {
  return axios.get('http://localhost:8080/parties');
}

function getPartyByNameFromServer(name) {
  return axios.get('http://localhost:8080/parties' + "/" + name);
}