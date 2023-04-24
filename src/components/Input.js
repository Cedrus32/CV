import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        // console.log(this.props);
        
        return (
            <input type={this.props.inputType} id={this.props.id} onFocus={this.props.handleFocus} onChange={this.props.handleChange}></input>
        )
    }
}
Input.propTypes = {
    inputType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleFocus: PropTypes.func,
    handleChange: PropTypes.func,
}

export default Input;
