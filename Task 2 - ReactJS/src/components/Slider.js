import React, { Component } from 'react';

export default class Slider extends Component {
    minValue = 1;
    maxValue = 500;
    state = { rangeValue: '250', textValue: '250' };

    /**
     * Check if value is a digit
     *
     * @memberof Slider
     */
    isNumber = function(key) {
        return /[0-9]/.test(key);
    };

    /**
     * Check if digit
     *
     * @param {char} key
     * @returns {boolean} true - is digit, false - not digit
     */
    isInValidRange = function(value) {
        value = parseInt(value);
        return !(value < this.minValue || value > this.maxValue);
    };

    /**
     * On value cahnge even handler
     *
     * @memberof Slider
     */
    rangeChanged = e => {
        //console.log('range changed: ', e.target.value);
        this.setState({
            textValue: e.target.value,
            rangeValue: e.target.value
        });
        this.props.onValueChange(e);
    };

    /**
     * On input key press event listener
     *
     * @memberof Slider
     */
    textKeyPress = e => {
        if (!this.isNumber(e.key)) e.preventDefault();
    };

    /**
     * On input value changed event listener
     *
     * @memberof Slider
     */
    textChanged = e => {
        //console.log('text changed: ', e.target.value);
        if (!this.isInValidRange(e.target.value)) {
            e.target.style.background = '#E87676';
            this.setState({
                textValue: e.target.value
            });
        } else {
            e.target.style.background = '#FFF';
            this.setState({
                textValue: e.target.value,
                rangeValue: e.target.value
            });
            this.props.onValueChange(e);
        }
    };

    render() {
        const { rangeValue, textValue } = this.state;
        return (
            <div className={this.props.className}>
                <input
                    type="range"
                    className="slider"
                    min={this.minValue}
                    max={this.maxValue}
                    value={rangeValue}
                    onChange={this.rangeChanged}
                />
                <input
                    type="text"
                    value={textValue}
                    onKeyPress={this.textKeyPress}
                    onChange={this.textChanged}
                />
            </div>
        );
    }
}
