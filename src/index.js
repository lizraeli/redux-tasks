import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import rootReducer from './reducers/index'
import './index.css';




let store = createStore(rootReducer)



ReactDOM.render(
  <Provider store={store}>
    <div>
        <Router history={browserHistory}>
          <Route path="/(:title)" component={App}/>
        </Router>
     </div>
  </Provider>,
  document.getElementById('root')
);
