import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initStore from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = initStore();
store.subscribe(()=>console.log('change'))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.register();
