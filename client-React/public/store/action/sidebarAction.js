'use strict';
import store from '../store.js';
import actionTypes from "./actionTypes";

export function toggleSidebar() {
    return { type: actionTypes.TOGGLESIDEBAR };
}