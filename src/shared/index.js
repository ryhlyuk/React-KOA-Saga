import React from 'react';
import ReactDOM  from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));
registerServiceWorker();
