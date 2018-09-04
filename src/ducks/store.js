import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import middleware from "redux-promise-middleware"

export default createStore(reducer, applyMiddleware(middleware()))
