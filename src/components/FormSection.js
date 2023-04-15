import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputItem from './InputItem';
import InputList from './InputList';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.inputItems = [];
    }

    render() {
        this.props.content.labels.forEach((label, index) => {
            let itemKey = this.props.type + index;
            if (label === 'Responsibilities' || label === 'Activities and Awards') {
                this.inputItems.push(<InputList key={itemKey} id={itemKey} label={label}/>);
            } else {
                this.inputItems.push(<InputItem key={itemKey} id={itemKey} label={label}/>)
            }
        });

        let addBtn;
        let removeBtn;
        if (this.props.type !== 'p') {
            addBtn = <button>Add</button>
            removeBtn = <button>Remove</button>
        }

        return (
            <>
                <form>
                <h1 className='form-header'>{this.props.content.title}</h1>
                    {this.inputItems}
                    {removeBtn}
                </form>
                {addBtn}
            </>
        );
    }
}
FormSection.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
};

export default FormSection;
