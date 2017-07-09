import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import freeze from "redux-freeze";
import { reducers } from "./components/App/reducers";
import thunk from 'redux-thunk';

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the redux-thunk middleware
middlewares.push(thunk);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && typeof(window) !== 'undefined' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// Pick up any initial state sent by the server
const initialState = typeof(window) !== 'undefined' ?window.__REDUX_STATE__ : {}

// create the store
const store = createStore(reducers,initialState, middleware);
let history = browserHistory
if (typeof(window) !== 'undefined') {
    history = syncHistoryWithStore(browserHistory, store)
  }

// export
export { store, history };
