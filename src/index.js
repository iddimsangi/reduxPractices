import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import counterreducer from './store/reducers/counter'
import resultsreducer from './store/reducers/results'

const rootReducer = combineReducers({
    ctr:counterreducer,
    reslts:resultsreducer
})

const store = createStore(rootReducer);
ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
