import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import items from "./reducers";
import { createLogger } from "redux-logger";

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
  items,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
