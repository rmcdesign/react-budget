var React = require('react');
var ReactDOM = require('react-dom');
//var {Link, IndexLink} = require('react-router');
import { NavLink } from 'react-router-dom';
var $ = require('jquery');


var Nav = React.createClass({

    setNavIndicator: function() {
        var $this = $(ReactDOM.findDOMNode(this));
        var activeLink = $this.find('.active');
        var menuHighlight = $this.find('.menu-highlight');
        if(activeLink.hasClass('active')) {
            var offset = activeLink[0].getBoundingClientRect();

            var w = window.innerWidth;
            var l = offset.left;
            var r = w - offset.right;
            menuHighlight.css({
                'backgroundColor': '#09f',
                'left': l,
                'right': r
            });
        } else {
            menuHighlight.css({
                'backgroundColor': 'transparent',
                'left': 0,
                'right': 0
            });
        }

    },

    //test: this.summaryLink.getBoundingClientRect(),

    componentDidMount: function() {
        this.setNavIndicator();
    },

    componentDidUpdate: function() {
        this.setNavIndicator();
    },

    handleClick: function(e) {
        var current = this.props.location.pathname.substr(1);
        var next = e.target.id;
        this.props.onNavClick(next, current);
    },


    render: function () {

        return (
            <div className="app-header">
                <div className="header">
                    <button className="fa fa-bars"></button>
                    <span className="app-title"><strong>BUDGET</strong>tracker</span>
                    <button className="settings-btn fa fa-cog"></button>
                </div>


                <nav className="tabs-nav">
                    <ul onClick={this.handleClick}>
                        {/*<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Summary</IndexLink></li>*/}
                        <li><NavLink id="summary" to="/" activeClassName="active" exact={true} activeStyle={{fontWeight: 'bold'}}>Summary</NavLink></li>
                        <li><NavLink id="income" to="/income" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Income</NavLink></li>
                        <li><NavLink id="expense" to="/expense" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Expenses</NavLink></li>
                        <li>Savings</li>
                    </ul>
                    <span className="menu-highlight"></span>
                </nav>
            </div>
        )
    }
});

module.exports = Nav;
