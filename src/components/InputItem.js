import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class InputItem extends Component {
    getType(id) {
        if (id === 'website') {
            return 'url';
        } else if (id === 'phone') {
            return 'tel';
        } else if (id === 'email') {
            return 'email';
        } else if (id === 'start-date' || id === 'end-date' || id === 'graduate-date') {
            return 'date';
        } else {
            return 'text';
        }
    }

    render() {
        console.log(this.props);
        let type = this.getType(this.props.itemLabel);

        return (
            <div className='input-item'>
                <label htmlFor={this.props.itemID}>{this.props.itemLabel}:</label>
                <Input inputKey={this.props.itemKey} inputID={this.props.itemID} inputType={type}/>
            </div>
        );
    }

}
InputItem.propTypes = {
    itemKey: PropTypes.string.isRequired,
    itemID: PropTypes.string.isRequired,
    itemLabel: PropTypes.string.isRequired
}

export default InputItem;
