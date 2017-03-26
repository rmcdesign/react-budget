var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var uuid = require('node-uuid');

//var {BrowserRouter as Router, Route, Link} = require('react-router-dom');

var Summary = require('Summary');
var Expenses = require('Expenses');
var Income = require('Income');

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

var API = require('API');
var Nav = require('Nav');
var AddItem = require('AddItem');


var BudgetApp = React.createClass({

    getInitialState: function() {
        return {
          items: API.getItems()
        };
    },

    componentDidUpdate: function() {
        API.setItems(this.state.items)
    },

    handleAddItem: function(itemValue, itemDescription, type) {
        this.setState({
            items: [
                ...this.state.items,
                {
                    id: uuid(),
                    amount: itemValue,
                    description: itemDescription,
                    type: type
                }
            ]
        })
    },

  render: function () {

      var {items} = this.state;

    const transitionOptions = {
        transitionName: "fade",
        transitionEnterTimeout: 350,
        transitionLeaveTimeout: 350
    };

    return (


    <Router>
        <div>
            {/*<Nav/>*/}
            <nav className="tabs-nav">
                <ul>
                    {/*<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Summary</IndexLink></li>*/}
                    <li><NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Summary</NavLink></li>
                    <li><NavLink to="/income" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Income</NavLink></li>
                    <li><NavLink to="/expense" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Expenses</NavLink></li>
                    <li>Savings</li>
                </ul>
                <span className="menu-highlight"></span>
            </nav>
            {/*<div className={ 'page-container ' + this.props.routes[1].path}>*/}
            <div className="page-container">
                <ReactCSSTransitionGroup {...transitionOptions} >
                    <Route exact path="/"
                           location={location}
                           key={location.key}
                           render={
                               (defaultProps) => <Summary items={items} {...defaultProps} />
                           }
                    />
                    {/*<IndexRoute component={Summary}></IndexRoute>*/}

                    <Route path="expense"
                           location={location}
                           key={location.key}
                           render={
                               (defaultProps) => <Expenses items={items} {...defaultProps} />
                           }
                           //component={Expenses}
                    />
                    <Route path="income"
                           location={location}
                           key={location.key}
                           render={
                               (defaultProps) => <Income items={items} {...defaultProps} />
                           }
                           //component={Income}
                    />

                </ReactCSSTransitionGroup>

            </div>
        </div>
    </Router>



      // <div>
      //   <Nav/>
      //   <div className={ 'page-container ' + this.props.routes[1].path}>
      //       <ReactCSSTransitionGroup {...transitionOptions} >
      //       {
      //         React.cloneElement(this.props.children, {
      //             key: this.props.location.key,
      //             items: items
      //         })
      //       }
      //       </ReactCSSTransitionGroup>
      //   </div>
      //   <AddItem onAddItem={this.handleAddItem} type={this.props.routes[1].path}/>
      // </div>
    )
  }
});

module.exports = BudgetApp;
