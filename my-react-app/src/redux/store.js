import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { signupReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    users : signupReducer,
   
})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store = legacy_createStore(rootReducer , composer(applyMiddleware(thunk)))