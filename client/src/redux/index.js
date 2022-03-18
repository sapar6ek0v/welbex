import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly.js";
import thunk from "redux-thunk";
import user from "./reducers/userReducer.js";
import message from "./reducers/messageReducer.js";

const initialState = {}

const rootReducer = combineReducers({
    user,
    message
})


export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))