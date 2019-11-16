import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import App from "./app";
import firstReducer from "./reducers/reducer";
import logger from "redux-logger";
import { rootSaga } from "./sagas/rootSaga";

const allReducers = combineReducers({ firstReducer });
const sagaMiddleware = createSagaMiddleware();
const allMiddleware = applyMiddleware(logger, sagaMiddleware);
const store = createStore(allReducers, allMiddleware);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
