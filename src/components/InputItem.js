import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class InputItem extends Component {
    getType(label) {
        if (this.props.label === 'Website') {
            return 'url';
        } else if (this.props.label === 'Phone') {
            return 'tel';
        } else if (this.props.label === 'Email') {
            return 'email';
        } else if (this.props.label === 'Objective for Applying') {
            return 'textbox';
        } else if (this.props.label === 'Start' || this.props.label === 'End' || this.props.label === 'Graduated') {
            return 'date';
        } else {
            return 'text';
        }
    }

    render() {
        let type = this.getType(this.props.label);

        return (
            <div>
                <label htmlFor={this.props.itemID}>{this.props.label}:</label>
                <Input inputType={type} id={this.props.itemID}/>
            </div>
        );
    }

}
InputItem.propTypes = {
    itemID: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default InputItem;
