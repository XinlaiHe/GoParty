"use strict"
import actionTypes from "../action/actionTypes";

const initialState = { sidebar: "hidden" };

export default function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLESIDEBAR:
      return Object.assign({}, state, {
        sidebar: state.sidebar == "hidden" ? "visible" : "hidden"
      })
    default:
      return state
  }
};