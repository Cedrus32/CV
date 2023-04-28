import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputItem from './InputItem';
import Button from './Button';

class Form extends Component {
    render() {
        let inputElements = [];
        for (let i = 0; i < this.props.formIDs.length; i++) {
            let objectKey = `${this.props.formKey}-${i}`;
            let objectLabel = this.props.formLabels[i];
            let objectID = this.props.formIDs[i];
            inputElements.push(<InputItem key={objectKey}
                itemKey={objectKey}
                itemID={objectID}
                changeFocus={this.props.changeFocus}
                changeValue={this.props.changeValue}
                itemLabel={objectLabel}/>)
        }

        let removeBtn;
        if (this.props.formType !== 'p') {
            removeBtn = <Button formKey={this.props.formKey} handleClick={this.props.removeForm} buttonContent='Remove'/>
        }

        return (
            <form key={this.props.formKey}>
                {inputElements}
                {removeBtn}
            </form>
        )
    }
}
Form.propTypes = {
    formKey: PropTypes.string.isRequired,
    formType: PropTypes.string.isRequired,
    formLabels: PropTypes.array.isRequired,
    formIDs: PropTypes.array.isRequired,
    removeForm: PropTypes.func,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    changeFocus: PropTypes.func.isRequired,
    changeValue: PropTypes.func.isRequired,
}

export default Form;
