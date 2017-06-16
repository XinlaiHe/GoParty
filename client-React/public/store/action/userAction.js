'use strict';
import store from '../store.js';
import actionTypes from "./actionTypes";

export function login(username, password) {
    return { type: actionTypes.USERLOGIN, username };
}