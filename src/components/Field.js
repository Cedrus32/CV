import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
    getType(id) {
        if (id === 'website') {
            return 'url';
        } else if (id === 'phone') {
            return 'tel';
        } else if (id === 'email') {
            return 'email';
        } else if (id === 'start-date' || id === 'end-date' || id === 'graduated-date') {
            return 'date';
        } else if (id === 'responsibilities' || id === 'activities-and-awards') {
            return 'textarea';
        } else {
            return 'text';
        }
    }

    render() {
        let element;
        let inputType = this.getType(this.props.itemID);
        if (inputType === 'textarea') {
            element = <textarea key={this.props.itemKey} data-input-key={this.props.itemKey} data-form-type={this.props.formType} id={this.props.itemID} onFocus={this.props.changeFocus} onChange={this.props.changeValue}></textarea>
        } else {
            element = <input key={this.props.itemKey} data-input-key={this.props.itemKey} data-form-type={this.props.formType} type={inputType} id={this.props.itemID} onFocus={this.props.changeFocus} onChange={this.props.changeValue}></input>
        }

        return (
            <div>
                <label htmlFor={this.props.itemID}>{this.props.itemLabel}:</label>
                {element}
            </div>
        );
    }

}
Field.propTypes = {
    itemKey: PropTypes.string.isRequired,
    formType: PropTypes.string.isRequired,
    itemID: PropTypes.string.isRequired,
    changeFocus: PropTypes.func.isRequired,
    changeValue: PropTypes.func.isRequired,
    itemLabel: PropTypes.string.isRequired,
}

export default Field;
