import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
/* ------------ Global Styles ------------ */
import './global-styles/reset.css';
import './global-styles/index.css';
/* ------------ Site Components ------------ */
import JobsDashboard from './jobs-dashboard';

const Home = () => {
  return (
    <div>
      <h1>Site Building Home Page</h1>
      <p>There will be a cool home page with descriptions of each site I've built</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/job-dashboard'>
          <JobsDashboard />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

