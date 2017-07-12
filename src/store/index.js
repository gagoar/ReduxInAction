import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export function configureStore(reducer) {
    return createStore(
        reducer,
        devToolsEnhancer(),
        applyMiddleware(thunk)
    );
}

