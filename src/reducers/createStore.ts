import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./index";
import sagas from "../sagas";

const middleware = [];
const enhancers = [];

// Configure saga middleware
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

// Apply all the middlewares
const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancers.push(applyMiddleware(...middleware));

const store = createStore(reducers, composeEnhancers(...enhancers));

// kick off root saga
sagaMiddleware.run(sagas);

export default store;
