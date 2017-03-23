var React = require('react');

var AddItem = React.createClass({

    handleSubmit: function(e) {
        e.preventDefault();
        var itemValue = this.refs.itemValue.value;
        var itemDescription = this.refs.itemDescription.value;
        var type = this.refs.type.value;

        if(itemValue.length > 0 && itemDescription.length > 0) {
            this.refs.itemValue.value = '';
            this.refs.itemDescription.value = '';
            this.props.onAddItem(itemValue, itemDescription, type);
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
                <div className="buttons-container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="hidden" ref="type" value={type}/>
                        <div className="tracker-input-container">
                            <div>
                                <input type="text" ref="itemDescription" className="tracker-input description" placeholder="Add description"/>
                            </div>
                            <div>
                                <input type="number" ref="itemValue" className="tracker-input" placeholder="Add amount"/>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className={type}>Add {type}</button>
                        </div>
                    </form>
                </div>
            );
        } else {
            return false;
        }


    }
});

module.exports = AddItem;
