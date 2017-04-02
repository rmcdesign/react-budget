var React = require('react');
var dateFormat = require('dateformat');

var AddItem = React.createClass({

    handleSubmit: function(e) {
        e.preventDefault();
        var itemValue = this.refs.itemValue.value;
        var itemDescription = this.refs.itemDescription.value;
        var type = this.refs.type.value;


        if(itemValue.length > 0 && itemDescription.length > 0) {
            this.refs.itemValue.value = '';
            this.refs.itemDescription.value = '';

            var now = new Date();
            var timeDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

            this.props.onAddItem(itemValue, itemDescription, type, timeDate);
        } else {
            if(itemDescription.length === 0) {
                this.refs.itemDescription.focus();
            } else {
                this.refs.itemValue.focus();
            }

        }
    },

    render: function () {

        var type = this.props.type;

        if(type) {
            return (
                <button onClick={this.props.toggleEnterDetails} className={type}>Add {type}</button>
            );
        } else {
            return false;
        }


    }
});

module.exports = AddItem;
