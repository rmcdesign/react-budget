var React = require('react');

var Income = React.createClass({
    render: function () {
        return (
            <div className="transition-item">
                <div className="recent-activity">
                    <h4>Income</h4>

                    <ul>
                        <li><span className="item-icon fa fa-bank"></span> <span className="item-label">Wages</span> <span className="item-value item__inc">£4000.00</span></li>
                        <li><span className="item-icon fa fa-bank"></span> <span className="item-label">Freelance work</span> <span className="item-value item__inc">£550.00</span></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Income;
