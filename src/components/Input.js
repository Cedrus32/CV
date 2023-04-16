import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    render() {
        // console.log(this.props);
        return (
            <input type={this.props.inputType} id={this.props.id}></input>
        )
    }
}
Input.propTypes = {
    inputType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Input;
