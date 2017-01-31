import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import DevTools from './containers/DevTools'
import App from './components/App';
import reducer from './reducers/index'
import './index.css';




let store = createStore(reducer, DevTools.instrument())



ReactDOM.render(
  <Provider store={store}>
    <div>
        <Router history={browserHistory}>
          <Route path="/(:title)" component={App}/>
        </Router>
        <DevTools/>
     </div>
  </Provider>,
  document.getElementById('root')
);
