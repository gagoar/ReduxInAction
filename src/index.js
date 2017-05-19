import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import tasks from './reducers'
import { configureStore } from './store'

const store = configureStore(tasks);

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);
