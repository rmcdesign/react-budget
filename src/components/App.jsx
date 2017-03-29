//import React, { Component } from 'react';

var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

//var {BrowserRouter as Router, Route, Link} = require('react-router-dom');

// var Summary = require('Summary');
// var Expenses = require('Expenses');
// var Income = require('Income');

import {
    BrowserRouter as Router,
    Route,
    NavLink
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
var AddItem = require('./AddItem');


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

    navClicked: function(href) {
        var self = this;
        self.setState({
            enablePageTransitions: true
        });
        setTimeout(function() {
            self.setState({
                enablePageTransitions: false
            });
        }, 300);
    },

    toggleEnterDetails: function() {
        this.setState({showEnterDetails: !this.state.showEnterDetails});
    },

    render: function () {

        var {items, enablePageTransitions} = this.state;

        const transitionOptions = {
            transitionName: "fade",
            transitionEnterTimeout: 350,
            transitionLeaveTimeout: 350,
            transitionEnter:enablePageTransitions,
            transitionLeave:enablePageTransitions
        };

        return (


            <Router>
                <Route render={({ location, context }) => (

                <div id="app">
                    <Nav onNavClick={this.navClicked}/>
                    <div className={ 'page-container ' + location.pathname.substr(1)}>

                            <ReactCSSTransitionGroup {...transitionOptions}>
                                <Route
                                    key={uuid()}
                                   location={location}
                                   exact path="/"
                                    render={
                                        (defaultProps) => <Summary items={items} {...defaultProps} />
                                    }
                                />
                                <Route
                                       location={location}
                                       key={uuid()}
                                       path="/expense"
                                       render={
                                           (defaultProps) => <Expenses items={items} {...defaultProps} />
                                       }
                                />
                                <Route path="/income"
                                       location={location}
                                       key={uuid()}
                                       render={
                                           (defaultProps) => <Income items={items} {...defaultProps} />
                                       }
                                />

                                <Route path="/add"
                                       location={location}
                                       key={uuid()}
                                       render={
                                           (defaultProps) => <EnterDetails {...defaultProps} />
                                       }
                                />



                            </ReactCSSTransitionGroup>

                    </div>

                    {/*{ this.state.showEnterDetails ? <EnterDetails/> : null }*/}

                    <div className="buttons-container">
                        <div className="buttons">
                            <NavLink onClick={this.navClicked} className="add-btn" id="add" to="/add" exact={true}>Add expense</NavLink>
                        </div>
                    </div>


                    {/*<AddItem onAddItem={this.handleAddItem} toggleEnterDetails={this.toggleEnterDetails} type={location.pathname.substr(1)}/>*/}

                </div>
                )}/>
            </Router>



        )
    }
});

module.exports = BudgetApp;
