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
        let inputElements = [];
        for (let i = 0; i < this.props.formIDs.length; i++) {
            let objectKey = `${this.props.formKey}-${i}`;
            let objectLabel = this.props.formLabels[i];
            let objectID = this.props.formIDs[i]
            if (this.props.formIDs[i] === 'responsibilities' || this.props.formIDs[i] === 'activities-and-awards') {
                inputElements.push(<InputList key={objectKey} listKey={objectKey} listID={objectID} listLabel={objectLabel}/>);
            } else {
                inputElements.push(<InputItem key={objectKey} itemKey={objectKey} itemID={objectID} itemLabel={objectLabel}/>)
            }
        }
        
        let removeBtn;
        if (this.props.formType !== 'p') {
            removeBtn = <Button formKey={this.props.formKey} handleClick={this.props.handleClick} buttonContent='Remove'/>
        }

        return (
            <div key={this.props.formKey}>
                {inputElements}
                {removeBtn}
            </div>
        )
    }
}
Form.propTypes = {
    formKey: PropTypes.string.isRequired,
    formIDs: PropTypes.array.isRequired,
    formType: PropTypes.string.isRequired,
    formLabels: PropTypes.array.isRequired,
    handleClick: PropTypes.func,
}

export default Form;
