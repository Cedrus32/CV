import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputList from './InputList';
import InputItem from './InputItem';
import Button from './Button';

class Form extends Component {
        render() {
            // console.log(this.props);

            let inputItems = [];
            this.props.formContent.labels.forEach((label, index) => {
                let itemKey = this.props.formType + index;
                if (label === 'Responsibilities' || label === 'Activities and Awards') {
                    inputItems.push(<InputList key={itemKey} id={itemKey} label={label}/>);
                } else {
                    inputItems.push(<InputItem key={itemKey} id={itemKey} label={label}/>)
                }
            });

            let removeBtn;
            if (this.props.formType !== 'p') {
                removeBtn = <Button do='removeForm' buttonContent='Remove'/>
            }

            return (
                <form>
                    {inputItems}
                    {removeBtn}
                </form>
            )
        }
}
Form.propTypes = {
    formContent: PropTypes.object.isRequired,
    formType: PropTypes.string.isRequired,
}

export default Form;
