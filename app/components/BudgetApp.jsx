var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Nav = require('Nav');


var BudgetApp = React.createClass({



  render: function () {

    const transitionOptions = {
        transitionName: "fade",
        transitionEnterTimeout: 350,
        transitionLeaveTimeout: 350
    };

    return (
      <div>
        <Nav/>
        <div className="page-container test">
            <ReactCSSTransitionGroup {...transitionOptions}>
            {
              React.cloneElement(this.props.children, {
                  key: this.props.location.key
              })
            }
            </ReactCSSTransitionGroup>
        </div>
          <div className="buttons-container">
              <div className="tracker-input-container">
                  <input type="number" className="tracker-input" placeholder="Add Income or Expense here"/>
              </div>

              <div className="buttons">
                  <button>Income</button>
                  <button>Expense</button>
              </div>
          </div>

      </div>
    )
  }
});

module.exports = BudgetApp;
