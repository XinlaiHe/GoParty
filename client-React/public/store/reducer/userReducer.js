"use strict"
import actionTypes from "../action/actionTypes";

const initialState = { username: undefined };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERLOGIN:
      return Object.assign({}, state, {
        username: action.username
      })
    default:
      return state
  }
};