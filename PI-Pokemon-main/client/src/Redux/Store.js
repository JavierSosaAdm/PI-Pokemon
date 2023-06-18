// import {createStore, applyMiddleware, compose} from 'redux'; // 
// import rootReducer from './Reducer';
// import thunkMiddleware from 'redux-thunk'

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar con a la extencion de navegador => REDUX DEVTOOLS 
// const store = createStore(
//     rootReducer, 
//     composeEnhancer(applyMiddleware(thunkMiddleware))
//     ); // esta linea nos permine hacer peticiones a un servidor

// export default store;

import {createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
