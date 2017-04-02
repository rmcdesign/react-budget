var React = require('react');
import {
    NavLink
} from 'react-router-dom';

import ListItem from './ListItem';

var Income = React.createClass({

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

        var renderIncomes = () => {
            return items.map((item) => {
                if(item.type === 'income') {
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
                        <h4>Income</h4>

                        <ul>
                            {renderIncomes()}
                        </ul>
                    </div>
                </div>
                <div className="add-new">
                    <NavLink onClick={this.props.onButtonClick} className="btn income" to="/add-income" exact={true}>Add income</NavLink>
                </div>
            </div>
        )
    }
});

module.exports = Income;
