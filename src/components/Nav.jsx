var React = require('react');
var ReactDOM = require('react-dom');
//var {Link, IndexLink} = require('react-router');
import { NavLink } from 'react-router-dom';
var $ = require('jquery');


var Nav = React.createClass({

    //test: this.summaryLink.getBoundingClientRect(),

    componentDidMount: function() {
        var $this = $(ReactDOM.findDOMNode(this));
        var activeLink = $this.find('.active');
        var offset = activeLink[0].getBoundingClientRect();
        var menuHighlight = $this.find('.menu-highlight');
        var w = window.innerWidth;
        var l = offset.left;
        var r = w - offset.right;

        //console.log(w,l, r);

        menuHighlight.css({
            'left': l,
            'right': r
        });
        // set el height and width etc.
    },

    componentDidUpdate: function() {
        var $this = $(ReactDOM.findDOMNode(this));
        var activeLink = $this.find('.active');
        var offset = activeLink[0].getBoundingClientRect();
        var menuHighlight = $this.find('.menu-highlight');
        var w = window.innerWidth;
        var l = offset.left;
        var r = w - offset.right;

        //console.log(w,l, r);

        menuHighlight.css({
            'left': l,
            'right': r
        });
        // set el height and width etc.
    },

    handleClick: function(e) {
        this.props.onNavClick(e.target.href);
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
