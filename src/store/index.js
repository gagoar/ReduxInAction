import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

export function configureStore(reducer) {
   return createStore(reducer, devToolsEnhancer());
}

