var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

// load components
var BudgetApp = require('BudgetApp');
var Summary = require('Summary');
var Expenses = require('Expenses');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={BudgetApp}>
          <Route path="expenses" component={Expenses}/>
          <IndexRoute component={Summary}></IndexRoute>
      </Route>
  </Router>,
  document.getElementById('app')
);
