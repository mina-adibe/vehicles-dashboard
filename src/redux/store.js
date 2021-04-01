import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReduces from "./reducers/index";
import { createLogger } from "redux-logger";

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
  rootReduces,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
