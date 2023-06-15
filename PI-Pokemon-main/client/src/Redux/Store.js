import {createStore, applyMiddleware, compose} from 'redux'; // 
import reducer from './reducer';
import thunkmiddleware from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar con a la extencion de navegador => REDUX DEVTOOLS 
export const store = createStore(
    reducer, 
    composeEnhacer(applyMiddleware(thunkmiddleware))); // esta linea nos permine hacer peticiones a un servidor


