var React = require('react');

import {
    NavLink
} from 'react-router-dom'

import ListItem from './ListItem';

var Expenses = React.createClass({

    // getInitialState: function() {
    //     return {
    //         showButton: false
    //     };
    // },
    //
    // componentDidMount: function() {
    //     var self = this;
    //     setTimeout(function() {
    //         self.setState({showButton: true});
    //     }, 300);
    // },
    //
    // componentWillUnmount: function() {
    //     this.setState({showButton: false});
    // },

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
                <div className="scroll-content">
                    <div className="recent-activity">
                        <h4>Expenses</h4>

                        <ul>
                            {renderExpenses()}
                        </ul>
                    </div>
                </div>
                <div className="add-new">
                    <NavLink onClick={this.props.onButtonClick} className="btn expense" to="/add-expense" exact={true}>Add expense</NavLink>
                </div>
            </div>
        )
    }
});

module.exports = Expenses;

