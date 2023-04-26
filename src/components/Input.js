import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        return (
            <input key={this.props.inputKey} data-input-key={this.props.inputKey} type={this.props.inputType} id={this.props.inputID} onFocus={this.props.handleFocus}></input>
        )
    }
}
Input.propTypes = {
    inputKey: PropTypes.string,
    inputID: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    handleFocus: PropTypes.func,
}

export default Input;
