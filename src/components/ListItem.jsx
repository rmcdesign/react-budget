var React = require('react');



var ListItem = React.createClass({



    render: function () {

        var {amount, description, type} = this.props;

        if(type === 'income') {
            return (
                <li><span className="item-icon fa fa-plus-circle"></span> <span className="item-label">{description}</span> <span className="item-value item__inc">£{amount}</span></li>
            )
        } else {
            return (
                <li><span className="item-icon fa fa-minus-circle"></span> <span className="item-label">{description}</span> <span className="item-value item__exp">-£{amount}</span></li>
            )
        }


    }
});

module.exports = ListItem;
