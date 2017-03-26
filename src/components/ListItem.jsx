var React = require('react');



var ListItem = React.createClass({



    render: function () {

        var {amount, description, type, timeDate} = this.props;

        if(type === 'income') {
            return (
                <li>
                    <div>
                        <span className="item-icon fa fa-plus-circle"></span>
                        <span className="item-label">{description}</span>
                        <span className="item-value item__inc">£{amount}</span>
                    </div>
                    <div className="time-date">{timeDate}</div>
                </li>
            )
        } else {
            return (
                <li>
                    <div>
                        <span className="item-icon fa fa-minus-circle"></span>
                        <span className="item-label">{description}</span>
                        <span className="item-value item__exp">-£{amount}</span>
                    </div>
                    <div className="time-date">{timeDate}</div>
                </li>
            )
        }


    }
});

module.exports = ListItem;
