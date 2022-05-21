import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { roothReducer } from './roothReducer';

const middleware = applyMiddleware(thunk);

export const store = createStore(roothReducer, middleware);

