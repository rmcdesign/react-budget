var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var uuid = require('node-uuid');

var API = require('API');
var Nav = require('Nav');
var AddItem = require('AddItem');


var BudgetApp = React.createClass({

    getInitialState: function() {
        return {
          items: API.getItems()
        };
    },

    componentDidUpdate: function() {
        API.setItems(this.state.items)
    },

    handleAddItem: function(itemValue, itemDescription, type) {
        this.setState({
            items: [
                ...this.state.items,
                {
                    id: uuid(),
                    amount: itemValue,
                    description: itemDescription,
                    type: type
                }
            ]
        })
    },

  render: function () {

      var {items} = this.state;

    const transitionOptions = {
        transitionName: "fade",
        transitionEnterTimeout: 350,
        transitionLeaveTimeout: 350
    };

    return (
      <div>
        <Nav/>
        <div className={ 'page-container ' + this.props.routes[1].path}>
            <ReactCSSTransitionGroup {...transitionOptions} >
            {
              React.cloneElement(this.props.children, {
                  key: this.props.location.key,
                  items: items
              })
            }
            </ReactCSSTransitionGroup>
        </div>
        <AddItem onAddItem={this.handleAddItem} type={this.props.routes[1].path}/>
      </div>
    )
  }
});

module.exports = BudgetApp;
