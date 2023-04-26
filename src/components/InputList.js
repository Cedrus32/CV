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
        let objectKey = `${this.props.listKey}-${newID}`;
        this.setState({list: [...this.state.list, {inputKey: objectKey, input: <Input key={objectKey} inputKey={objectKey} handleFocus={this.handleFocus}/>}]});
    }

    removeItem() {
        this.setState({list: this.state.list.filter(item =>
            item.inputKey !== this.state.currentTarget
        )});
    }

    handleFocus(e) {
        this.setState({currentTarget: e.target.dataset.inputKey});
    }
    
    render() {
        // style with grid
        console.log(this.props);

        let inputItems = [];
        this.state.list.forEach(item => {
            inputItems.push(item.input);
        })
        console.log(inputItems);

        return (
            <div className='input-list'>
                <label htmlFor={this.props.listID}>{this.props.listLabel}:</label>
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
    listKey: PropTypes.string.isRequired,
    listID: PropTypes.string.isRequired,
    listLabel: PropTypes.string.isRequired
}

export default InputList;
