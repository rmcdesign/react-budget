var React = require('react');

import ListItem from './ListItem';

var Expenses = React.createClass({

    render: function () {

        var {items} = this.props;

        var renderExpenses = () => {
            return items.map((item) => {
                if(item.type === 'expense') {
                    return (
                        <ListItem key={item.id} {...item}/>
                    );
                } else {
                    return false;
                }

            });
        };

        return (
            <div className="transition-item">
                <div className="recent-activity">
                    <h4>Expenses</h4>

                    <ul>
                        {renderExpenses()}
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Expenses;

