import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputList from './InputList';
import InputItem from './InputItem';
import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('props', this.props);
        console.log('state', this.state);
    }

    render() {
        console.log('form key', this.props.formKey);

        let inputItems = [];
        this.props.formLabels.forEach((label, index) => {
            let itemKey = `${this.props.formKey}-${index}`;
            if (label === 'Responsibilities' || label === 'Activities and Awards') {
                inputItems.push(<InputList key={itemKey} listID={itemKey} label={label}/>);
            } else {
                inputItems.push(<InputItem key={itemKey} itemID={itemKey} label={label}/>)
            }
        });

        let removeBtn;
        if (this.props.formType !== 'p') {
            removeBtn = <Button formKey={this.props.formKey} handleClick={this.props.handleClick} buttonContent='Remove'/>
        }

        return (
            <div key={this.props.formKey}>
                {inputItems}
                {removeBtn}
            </div>
        )
    }
}
Form.propTypes = {
    formKey: PropTypes.string.isRequired,
    formType: PropTypes.string.isRequired,
    formLabels: PropTypes.array.isRequired,
    handleClick: PropTypes.func,
}

export default Form;
