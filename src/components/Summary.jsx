var React = require('react');
import {
    NavLink
} from 'react-router-dom';
import ListItem from './ListItem';

var Summary = React.createClass({
    render: function () {

        var {items} = this.props;

        var renderSummary = () => {
            return items.map((item) => {
                return (
                    <ListItem key={item.id} {...item}/>
                );
            });
        };

        return (
            <div className="transition-item">
                <div className="scroll-content">
                    <div className="recent-activity">
                        <h4>Recent Activity</h4>

                        <ul>
                            {renderSummary()}
                        </ul>
                    </div>
                </div>
                <div className="add-new">
                    <NavLink onClick={this.props.onButtonClick} className="btn income summary-btn" to="/add-income" exact={true}>Add income</NavLink>
                    <NavLink onClick={this.props.onButtonClick} className="btn expense summary-btn" to="/add-expense" exact={true}>Add expense</NavLink>
                </div>
            </div>
        )
    }
});

module.exports = Summary;
