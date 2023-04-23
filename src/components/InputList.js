import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Input from './Input';
import Button from './Button';

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
        this.handleChange = this.handleChange.bind(this);
    }

    addItem() {
        let listCopy = this.state.list;
        let newID = uniqid();
        listCopy.push({id: newID, value: ''});
        this.setState({items: listCopy});
    }

    removeItem() {
        let listCopy = this.state.list;
        listCopy.splice(this.state.currentTarget, 1);
        this.setState({list: listCopy});
        this.setState({currentTarget: null});
    }

    handleFocus(e) {
        let listCopy = this.state.list;
        let targetIndex = listCopy.findIndex(object => object.id === e.target.id);
        this.setState({currentTarget: targetIndex});
    }

    handleChange(e) {
        let listCopy = this.state.list;
        listCopy[this.state.currentTarget].value = e.target.value;
        this.setState({list: listCopy});
    }
    
    render() {
        // style with grid
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}:</label>
                <Button handleClick={this.addItem} buttonContent='+'/>
                <Button handleClick={this.removeItem} buttonContent='-'/>
                <div className='item-container'>
                    {this.state.list.map(object => (
                        <Input key={object.id} handleFocus={this.handleFocus} handleChange={this.handleChange} inputType='text' id={object.id} value={object.value}/>
                    ))}
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
