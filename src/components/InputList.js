import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class InputList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        console.log('add item with unique id');
    }

    removeItem() {
        console.log('remove item by unique id');
    }
    
    render() {
        // style with grid
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}:</label>
                <Button handleClick={this.addItem} buttonContent='+'/>
                <Button handleClick={this.removeItem} buttonContent='-'/>
                <div className='item-container'></div>
            </div>
        )
    }
}
InputList.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default InputList;
