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
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        let listCopy = this.state.list;
        let newID = uniqid();
        listCopy.push({id: newID, value: ''});
        this.setState({items: listCopy});
        console.log(this.state.list);
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
                <div className='item-container'>
                    {this.state.list.map(object => (
                        <Input key={object.id} inputType='text' id={object.id} value={object.value}/>
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
