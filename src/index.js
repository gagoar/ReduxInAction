import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import tasks from './reducers'
import { configureStore } from './store'

const store = configureStore(tasks);

// enabling webpack hot-reload feature

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;

        ReactDOM.render(
            <NextApp />,
            document.getElementById('root')
        );
    })

    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

