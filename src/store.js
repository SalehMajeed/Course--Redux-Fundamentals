import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers';
import { print1, print2, print3 } from './exampleAddons/middleware';

const comosedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);
// const store = createStore(rootReducer, undefined, comosedEnhancer);

// const middlewareEnhancer = applyMiddleware(print1, print2, print3);
const composedEnhancer = composeWithDevTools(applyMiddleware(print1, print2, print3));
const store = createStore(rootReducer, composedEnhancer);
export default store;
