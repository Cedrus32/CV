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
            targetKey: null,
            targetIndex: null,
            listLength: 0,
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addItem() {
        let newID = uniqid();
        let objectKey = `${this.props.listKey}-${newID}`;
        this.setState({list: [...this.state.list, {inputKey: objectKey, inputValue: ''}]}); 
        this.setState({listLength: this.state.listLength + 1});
        // todo re-index id's, include which form (work-1-responsibility-1) (must be stored as set of string values)
    }

    removeItem() {
        this.setState({list: this.state.list.filter(object => object.inputKey !== this.state.targetKey)});
    }

    handleFocus(e) {
        this.setState({targetKey: e.target.dataset.inputKey});
        this.setState({targetIndex: this.state.list.findIndex(object => object.inputKey === e.target.dataset.inputKey)});
    }

    handleChange(e) {
        let listCopy = this.state.list;
        listCopy[this.state.targetIndex].inputValue = e.target.value;
        this.setState({list: listCopy});
    }
    
    render() {
        let inputItems = [];
        this.state.list.forEach(object => {
            inputItems.push(<Input key={object.inputKey} inputKey={object.inputKey} inputID={this.state.listLength.toString()} handleFocus={this.handleFocus} handleChange={this.handleChange} value={object.inputValue}/>);
        });

        return (
            <div className='input-list'>
                <label htmlFor={this.props.listID}>{this.props.listLabel}:</label>
                <Button handleClick={this.addItem} className={'add'} buttonContent='+'/>
                <Button handleClick={this.removeItem} className={'remove'} buttonContent='-'/>
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
