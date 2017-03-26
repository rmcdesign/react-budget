var React = require('react');

import ListItem from './ListItem';

var Summary = React.createClass({
    render: function () {

        var {items} = this.props;

        var renderSummary = () => {
            // return items.map((item) => {
            //     return (
            //         <ListItem key={item.id} {...item}/>
            //     );
            // });
        };

        return (
            <div className="transition-item">
                <div className="recent-activity">
                    <h4>Recent Activity</h4>

                    <ul>
                        {renderSummary()}
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Summary;


{/*<li><span className="item-icon fa fa-shopping-cart"></span> <span className="item-label">Shopping / Groceries</span> <span className="item-value item__exp">-£34.54</span></li>*/}
{/*<li><span className="item-icon fa fa-bank"></span> <span className="item-label">Wages</span> <span className="item-value item__inc">£4000.00</span></li>*/}
{/*<li><span className="item-icon fa fa-car"></span> <span className="item-label">Fuel</span> <span className="item-value item__exp">-£64.01</span></li>*/}
{/*<li><span className="item-icon fa fa-home"></span> <span className="item-label">Rent</span> <span className="item-value item__exp">-£445.00</span></li>*/}
{/*<li><span className="item-icon fa fa-coffee"></span> <span className="item-label">Coffee</span> <span className="item-value item__exp">-£5.12</span></li>*/}
{/*<li><span className="item-icon fa fa-shopping-cart"></span> <span className="item-label">Sainsburys</span> <span className="item-value item__exp">-£34.54</span></li>*/}
{/*<li><span className="item-icon fa fa-bank"></span> <span className="item-label">Freelance work</span> <span className="item-value item__inc">£550.00</span></li>*/}
{/*<li><span className="item-icon fa fa-car"></span> <span className="item-label">Fuel</span> <span className="item-value item__exp">-£50.01</span></li>*/}
{/*<li><span className="item-icon fa fa-home"></span> <span className="item-label">Cleaner</span> <span className="item-value item__exp">-£20.00</span></li>*/}
{/*<li><span className="item-icon fa fa-beer"></span> <span className="item-label">Pub</span> <span className="item-value item__exp">-£25.00</span></li>*/}
{/*<li><span className="item-icon fa fa-shopping-cart"></span> <span className="item-label">Shopping / Groceries</span> <span className="item-value item__exp">-£34.54</span></li>*/}
{/*<li><span className="item-icon fa fa-bank"></span> <span className="item-label">Wages</span> <span className="item-value item__inc">£4000.00</span></li>*/}
{/*<li><span className="item-icon fa fa-car"></span> <span className="item-label">Fuel</span> <span className="item-value item__exp">-£64.01</span></li>*/}
{/*<li><span className="item-icon fa fa-home"></span> <span className="item-label">Rent</span> <span className="item-value item__exp">-£445.00</span></li>*/}
{/*<li><span className="item-icon fa fa-coffee"></span> <span className="item-label">Coffee</span> <span className="item-value item__exp">-£5.12</span></li>*/}
{/*<li><span className="item-icon fa fa-shopping-cart"></span> <span className="item-label">Sainsburys</span> <span className="item-value item__exp">-£34.54</span></li>*/}
{/*<li><span className="item-icon fa fa-bank"></span> <span className="item-label">Freelance work</span> <span className="item-value item__inc">£550.00</span></li>*/}
{/*<li><span className="item-icon fa fa-car"></span> <span className="item-label">Fuel</span> <span className="item-value item__exp">-£50.01</span></li>*/}
{/*<li><span className="item-icon fa fa-home"></span> <span className="item-label">Cleaner</span> <span className="item-value item__exp">-£20.00</span></li>*/}
{/*<li><span className="item-icon fa fa-beer"></span> <span className="item-label">Pub</span> <span className="item-value item__exp">-£25.00</span></li>*/}