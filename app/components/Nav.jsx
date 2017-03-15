var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <div className="header">
                    <button className="fa fa-bars"></button>
                    <span className="app-title"><strong>BUDGET</strong>tracker</span>
                    <button className="settings-btn fa fa-cog"></button>
                </div>


                <nav className="tabs-nav">
                    <ul>
                        <li>Incomes</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Summary</IndexLink></li>
                        <li><Link to="/expenses" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Expenses</Link></li>
                        <li>Savings</li>
                    </ul>
                </nav>
            </div>
        )
    }
});

module.exports = Nav;
