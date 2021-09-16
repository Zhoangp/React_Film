import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import admin from './reducer/admin'
import user from './reducer/user'
const reducer = combineReducers({
admin, user
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )