import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Input from './Input';
import Button from './Button';

// todo refactor methods to reduce state copies and redundant code

class InputList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentTarget: null,
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    addItem() {
        let newID = uniqid();
        let inputKey = `${this.props.listID}-${newID}`;
        this.setState({list: [...this.state.list, {id: inputKey, input: <Input key={inputKey} inputKey={inputKey} id={inputKey} handleFocus={this.handleFocus} handleChange={this.handleChange} inputType='text'/>}]});
    }

    removeItem() {
        this.setState({list: this.state.list.filter(item =>
            item.id !== this.state.currentTarget
        )});
    }

    handleFocus(e) {
        this.setState({currentTarget: e.target.dataset.inputKey});
    }
    
    render() {
        // style with grid
        let inputItems = [];
        this.state.list.forEach(item => {
            inputItems.push(item.input);
        })
        console.log(inputItems);

        return (
            <div>
                <label htmlFor={this.props.listID}>{this.props.label}:</label>
                <Button handleClick={this.addItem} buttonContent='+'/>
                <Button handleClick={this.removeItem} buttonContent='-'/>
                <div className='item-container'>
                    {inputItems}
                </div>
            </div>
        )
    }
}
InputList.propTypes = {
    listID: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default InputList;
