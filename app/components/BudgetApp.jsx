var React = require('react');

var Nav = require('Nav');


var BudgetApp = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h3>BUDGET APP</h3>
        {this.props.children}
      </div>
    )
  }
});

module.exports = BudgetApp;
