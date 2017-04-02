import React, { Component } from 'react';
var dateFormat = require('dateformat');

var EnterDetails = React.createClass({

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
            if(itemValue.length === 0) {
                this.refs.itemValue.focus();
            } else {

                this.refs.itemDescription.focus();
            }

        }
    },

    render: function () {

        var type = this.props.type;
        var inputLabel = "How much did you earn?";
        if (type === 'expense') {
            inputLabel = "How much did you spend?";
        }

        {/*

        <div className="buttons-container">
            <div className="buttons">
                <button onClick={this.props.toggleEnterDetails} className={type}>Add {type}</button>
            </div>
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

            </form>
        </div>

         */}

        return (
            <div className="transition-item">
                <div className="scroll-content">
                    <div className="enter-details">
                        <form>
                            <div className="form-input">
                                <label htmlFor="amount">{ inputLabel }</label>
                                <input type="text" id="amount" ref="itemValue" placeholder="0.00"/>
                                <input type="hidden" ref="type" value={type}/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="description">Add description</label>
                                <input type="text" id="description" ref="itemDescription" placeholder="Add a comment here"/>
                            </div>

                            <label className="category-label" htmlFor="category">Choose a category</label>
                            <div className="radio-inputs">
                                <div className="radio">
                                    <input type="radio" id="travel" name="category" value="travel"/>
                                    <label htmlFor="travel"><span>Travel</span></label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="rent" name="category" value="rent"/>
                                    <label htmlFor="rent"><span>Rent</span></label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="food" name="category" value="food"/>
                                    <label htmlFor="food"><span>Food</span></label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="clothes" name="category" value="clothes"/>
                                    <label htmlFor="clothes"><span>Clothes</span></label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="social" name="category" value="social"/>
                                    <label htmlFor="social"><span>Social</span></label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="other" name="category" value="other"/>
                                    <label htmlFor="other"><span>Other</span></label>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="add-new">
                    <a onClick={this.handleSubmit} className={"btn " + type}>Add {type}</a>
                </div>
            </div>

        );
    }
});

export default EnterDetails;