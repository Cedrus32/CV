import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class InputList extends Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}:</label>
                <div>
                    <div className='btn-container'>
                        <Button do='addListItem' buttonContent='+'/>
                        <Button do='removeListItem' buttonContent='-'/>
                    </div>
                    <div className='item-container'></div>
                </div>
            </div>
        )
    }
}
InputList.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default InputList;
