var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router');
var $ = require('jQuery');

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


    render: function () {

        return (
            <div className="app-header">
                <div className="header">
                    <button className="fa fa-bars"></button>
                    <span className="app-title"><strong>BUDGET</strong>tracker</span>
                    <button className="settings-btn fa fa-cog"></button>
                </div>


                <nav className="tabs-nav">
                    <ul>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Summary</IndexLink></li>
                        <li><Link to="/income" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Income</Link></li>
                        <li><Link to="/expenses" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Expenses</Link></li>
                        <li>Savings</li>
                    </ul>
                    <span className="menu-highlight"></span>
                </nav>
            </div>
        )
    }
});

module.exports = Nav;
