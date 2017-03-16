var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Nav = require('Nav');


var BudgetApp = React.createClass({



  render: function () {

    const transitionOptions = {
        transitionName: "fade",
        transitionEnterTimeout: 250,
        transitionLeaveTimeout: 250
    };

      // {this.props.children}

    //console.log(this.props);

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
      </div>
    )
  }
});

module.exports = BudgetApp;
