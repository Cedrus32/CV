import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            targetFormIndex: null,
            targetItemIndex: null,
            addBtn: false,
        }

        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
        this.changeFocus = this.changeFocus.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'p') {
            this.addForm();
        } else {
            this.setState({addBtn: true});
        }
    }
    
    addForm() {
        let formKey = uniqid();
        let formItems = [];
        for (let i = 0; i < this.props.formContent.ids.length; i++) {
            let itemKey = `${formKey}-${i}`;
            formItems.push({itemKey: itemKey, itemValue: ''});
        }
        this.setState({forms: [...this.state.forms, {formKey: formKey, formItems: formItems}]});
    }
    removeForm(e) {
        this.setState({forms: this.state.forms.filter(form => form.formKey !== e.target.dataset.formKey)});
    }

    changeFocus(e) {
        this.setState({targetFormIndex: this.state.forms.findIndex(object => object.formKey === e.target.dataset.inputKey.split('-')[0])});
        this.setState({targetItemIndex: parseInt(e.target.dataset.inputKey.split('-')[1])});
    }
    changeValue(e) {
        let formsCopy = this.state.forms;
        formsCopy[this.state.targetFormIndex].formItems[this.state.targetItemIndex].value = e.target.value;
        this.setState({forms: formsCopy});
    }

    componentDidUpdate() { // ! testing only
        console.log('******');
        console.log(this.props.formType, 'component did update');
        console.log('state', this.state);
        // this.state.forms.forEach(form => (
        //     console.log(form.id, form.items)
        // ));
        console.log('******');
    }

    render() {
        let sectionID;
        if (this.props.formType === 'p') {
            sectionID = 'personal';
        } else if (this.props.formType === 'w') {
            sectionID = 'work';
        } else if (this.props.formType === 'e') {
            sectionID = 'education';
        }

        let removeFormCB;
        let addItemCB;
        let removeItemCB;
        if (this.props.formType !== 'p') {
            removeFormCB = this.removeForm;
            addItemCB = this.addItem;
            removeItemCB = this.removeItem;
        }

        let formElements = [];
        this.state.forms.forEach(object => {
            formElements.push(<Form key={object.formKey}
                                    formKey={object.formKey}
                                    formType={this.props.formType}
                                    formLabels={this.props.formContent.labels}
                                    formIDs={this.props.formContent.ids}
                                    removeForm={removeFormCB}
                                    addItem={addItemCB}
                                    removeItem={removeItemCB}
                                    changeFocus={this.changeFocus}
                                    changeValue={this.changeValue}/>);
        });
        
        let addBtn;
        if (this.state.addBtn === true) {
            addBtn = <Button handleClick={this.addForm} buttonContent='Add'/>
        }
        
        return (
            <section id={sectionID}>
                <h1 className='form-header'>{this.props.formContent.title}</h1>
                {formElements}
                {addBtn}
            </section>
        );
    }
}
FormSection.propTypes = {
    formType: PropTypes.string.isRequired,
    formContent: PropTypes.object.isRequired,
};

export default FormSection;
