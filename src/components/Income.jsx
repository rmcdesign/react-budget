var React = require('react');
var ListItem = require('ListItem');

var Income = React.createClass({

    render: function () {

        var {items} = this.props;

        var renderIncomes = () => {
            // return items.map((item) => {
            //     if(item.type === 'income') {
            //         return (
            //             <ListItem key={item.id} {...item}/>
            //         );
            //     }
            //
            // });
        };

        return (
            <div className="transition-item">
                <div className="recent-activity">
                    <h4>Income</h4>

                    <ul>
                        {renderIncomes()}
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Income;
