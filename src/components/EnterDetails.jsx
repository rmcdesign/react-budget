import React, { Component } from 'react';

class EnterDetails extends Component {
    render() {
        return (
            <div className="transition-item">
                <div className="enter-details">
                    <div className="form-input">
                        <label htmlFor="amount">How much did you spend?</label>
                        <input type="text" id="amount" placeholder="0.00"/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="description">Add description</label>
                        <input type="text" id="description" placeholder="Add a comment here"/>
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


                    <img src="./input.png" alt="" width="100%" height="auto"/>
                </div>
            </div>

        );
    }
}

export default EnterDetails;