import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        // console.log(this.props);
        // todo make id descriptive, use data-inputKey for state queries
        
        return (
            <input key={this.props.inputKey} data-input-key={this.props.inputKey} type={this.props.inputType} id={this.props.id} onFocus={this.props.handleFocus} onChange={this.props.handleChange}></input>
        )
    }
}
Input.propTypes = {
    inputKey: PropTypes.string,
    inputType: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleFocus: PropTypes.func,
    handleChange: PropTypes.func,
}

export default Input;
