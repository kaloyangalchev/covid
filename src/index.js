import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './pages/App';
import History from './pages/History';
import Details from './pages/Details';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

import './assets/styles/base.scss';

ReactDOM.render(
  <Provider store={store}>
		<BrowserRouter>
			<Switch>
                <Route path = "/" component = {App} exact/>
                <Route path = "/history/:id" component = {History} exact/>
                <Route path = "/details/:id" component = {Details} exact/>
            </Switch>
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
