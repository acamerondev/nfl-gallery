import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/home/Home';
import DetailPage from './components/detail/DetailPage';
import * as serviceWorker from './serviceWorker';

const NotFound = () => {
  return <h1 id="not-found">Not Found</h1>;
}

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:short" component={DetailPage}/>
        <Route path="/404" component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
