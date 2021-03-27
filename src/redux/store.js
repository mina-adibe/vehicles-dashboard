import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import items from "./reducers";

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(items, composeEnhancers(applyMiddleware(thunk)));

export default store;
