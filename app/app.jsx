var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load components
var BudgetApp = require('BudgetApp');
var Summary = require('Summary');
var Expenses = require('Expenses');
var Income = require('Income');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={BudgetApp}>
          <IndexRoute component={Summary}></IndexRoute>
          <Route path="expenses" component={Expenses}/>
          <Route path="income" component={Income}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
