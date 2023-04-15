import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputItem extends Component {
    render() {
        let type;
        if (this.props.label === 'Website') {
            type = 'url';
        } else if (this.props.label === 'Phone') {
            type = 'tel';
        } else if (this.props.label === 'Email') {
            type = 'email';
        } else if (this.props.label === 'Objective for Applying') {
            type = 'textbox';
        } else if (this.props.label === 'Start' || this.props.label === 'End' || this.props.label === 'Graduated') {
            type = 'date';
        }

        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}:</label>
                <input type={type} id={this.props.id}></input>
            </div>
        );
    }

}
InputItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default InputItem;
