import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import '../styles/site.css';
import '../styles/site.less';

ReactDOM.render(<Provider store={ createStore(reducers)}><Router><App /></Router></Provider>, document.getElementById('app'));
