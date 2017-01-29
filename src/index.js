import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import tasksReducer from './reducers/tasks'
import './index.css';

let store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:title)" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
