//import React, { Component } from 'react';

var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

//var {BrowserRouter as Router, Route, Link} = require('react-router-dom');

// var Summary = require('Summary');
// var Expenses = require('Expenses');
// var Income = require('Income');

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

var uuid = require('node-uuid');

import API from '../api/api';
import Nav from './Nav';
import Income from './Income';
import Expenses from './Expenses';
import Summary from './Summary';
import EnterDetails from './EnterDetails';

import '../css/app.css';

//var API = require('API');
// var Nav = require('Nav');
//var AddItem = require('./AddItem');

var speed = 400;


var BudgetApp = React.createClass({

    getInitialState: function() {
        return {
            items: API.getItems(),
            enablePageTransitions: false,
            showEnterDetails: false
        };
    },

    componentDidUpdate: function() {
        API.setItems(this.state.items);
    },

    handleAddItem: function(itemValue, itemDescription, type, timeDate) {
        this.setState({
            enablePageTransitions: false,
            items: [
                ...this.state.items,
                {
                    id: uuid(),
                    amount: itemValue,
                    description: itemDescription,
                    type: type,
                    timeDate: timeDate
                }
            ]
        });
    },

    navClicked: function(path, current) {
        var self = this;
        if (path != current) {
            self.setState({
                enablePageTransitions: true
            });
        }
        setTimeout(function() {
            self.setState({
                enablePageTransitions: false
            });
        }, speed);
    },

    toggleEnterDetails: function() {
        this.setState({showEnterDetails: !this.state.showEnterDetails});
    },

    render: function () {

        var {items, enablePageTransitions} = this.state;

        const transitionOptions = {
            transitionName: "fade",
            transitionEnterTimeout: speed,
            transitionLeaveTimeout: speed,
            transitionEnter:enablePageTransitions,
            transitionLeave:enablePageTransitions
        };

        return (


            <Router>
                <Route render={({ location, context }) => (

                <div id="router-root">
                    <Nav onNavClick={this.navClicked} location={location}/>
                    <div className={ 'page-container ' + location.pathname.substr(1)}>

                            <ReactCSSTransitionGroup {...transitionOptions}>
                                <Route
                                    key={uuid()}
                                   location={location}
                                   exact path="/"
                                    render={
                                        (defaultProps) => <Summary onButtonClick={this.navClicked} items={items} {...defaultProps} />
                                    }
                                />
                                <Route
                                       location={location}
                                       key={uuid()}
                                       path="/expense"
                                       render={
                                           (defaultProps) => <Expenses onButtonClick={this.navClicked} items={items} {...defaultProps} />
                                       }
                                />
                                <Route path="/income"
                                       location={location}
                                       key={uuid()}
                                       render={
                                           (defaultProps) => <Income onButtonClick={this.navClicked} items={items} {...defaultProps} />
                                       }
                                />

                                <Route path="/add-expense"
                                       location={location}
                                       key={uuid()}
                                       render={
                                           (defaultProps) => <EnterDetails onAddItem={this.handleAddItem} type="expense" {...defaultProps} />
                                       }
                                />

                                <Route path="/add-income"
                                       location={location}
                                       key={uuid()}
                                       render={
                                           (defaultProps) => <EnterDetails onAddItem={this.handleAddItem} type="income" {...defaultProps} />
                                       }
                                />



                            </ReactCSSTransitionGroup>

                    </div>

                    {/*<div className="buttons-container">*/}
                        {/*<div className="buttons">*/}
                            {/*<ReactCSSTransitionGroup {...transitionOptions}>*/}
                                {/*<Route path="/add-income"*/}
                                       {/*location={location}*/}
                                       {/*key={uuid()}*/}
                                       {/*render={*/}
                                           {/*(defaultProps) => <AddItem type="income" />*/}
                                       {/*}*/}
                                {/*/>*/}
                                {/*<Route path="/add-expense"*/}
                                       {/*location={location}*/}
                                       {/*key={uuid()}*/}
                                       {/*render={*/}
                                           {/*(defaultProps) => <AddItem type="expense" />*/}
                                       {/*}*/}
                                {/*/>*/}
                                {/*<Route path="/income"*/}
                                       {/*location={location}*/}
                                       {/*key={uuid()}*/}
                                       {/*render={*/}
                                           {/*(defaultProps) => <NavLink onClick={this.navClicked} className="btn income" to="/add-income" exact={true}>Add income</NavLink>*/}
                                       {/*}*/}
                                {/*/>*/}
                                {/*<Route path="/expense"*/}
                                       {/*location={location}*/}
                                       {/*key={uuid()}*/}
                                       {/*render={*/}
                                           {/*(defaultProps) => <NavLink onClick={this.navClicked} className="btn expense" to="/add-expense" exact={true}>Add expense</NavLink>*/}
                                       {/*}*/}
                                {/*/>*/}
                            {/*</ReactCSSTransitionGroup>*/}

                            {/*/!*{location.pathname.substr(1) === 'add-expense' || location.pathname.substr(1) === 'add-income' ? <NavLink onClick={this.navClicked} className="btn" to="/" exact={true}>Cancel</NavLink> : null}*!/*/}
                            {/*/!*{location.pathname.substr(1) != 'add-expense' ? <NavLink onClick={this.navClicked} className="btn income" to="/add-income" exact={true}>Add income</NavLink> : null}*!/*/}
                            {/*/!*{location.pathname.substr(1) != 'add-income' ? <NavLink onClick={this.navClicked} className="btn expense" to="/add-expense" exact={true}>Add expense</NavLink> : null}*!/*/}
                        {/*</div>*/}
                    {/*</div>*/}


                    {/*<AddItem onAddItem={this.handleAddItem} toggleEnterDetails={this.toggleEnterDetails} type={location.pathname.substr(1)}/>*/}

                </div>
                )}/>
            </Router>



        )
    }
});

module.exports = BudgetApp;
