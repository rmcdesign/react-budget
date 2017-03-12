var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load components
var BudgetApp = require('BudgetApp');
var Summary = require('Summary');
var About = require('About');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={BudgetApp}>
        <Route path="about" component={About}/>
        <IndexRoute component={Summary}></IndexRoute>
      </Route>
  </Router>,
  document.getElementById('app')
);
