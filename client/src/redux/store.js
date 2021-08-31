import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory as createHistory } from "history";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {
  loadingBarMiddleware,
  loadingBarReducer,
} from "react-redux-loading-bar";

import reducers from "../redux/reducers";
import rootSaga from "../redux/sagas";

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [
  thunk,
  sagaMiddleware,
  routeMiddleware,
  loadingBarMiddleware({
    promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"],
  }), // manages loading bar
];

let enhancers = [applyMiddleware(...middlewares)];

// if (process.env.NODE_ENV === "development") {
// 	enhancers.push(
// 		window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 			window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);
// }

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
    loadingBar: loadingBarReducer,
  }),
  compose(...enhancers)
);

sagaMiddleware.run(rootSaga);

export { store, history };
