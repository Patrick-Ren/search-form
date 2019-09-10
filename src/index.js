import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
//polyfill must be first 2 lines
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(<App />, document.getElementById('root'));
