import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Imports for Redux
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './store/recucer';

// Creating Redux Store
const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
	// Giving App access to the redux store
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById("root")
	);
