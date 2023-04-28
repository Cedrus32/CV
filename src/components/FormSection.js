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
            targetKey: null,
            targetIndex: null,
            addBtn: false,
        }

        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'p') {
            this.addForm();
        } else {
            this.setState({addBtn: true});
        }
    }
    
    addForm() {
        let newFormKey = uniqid();
        let inputObjects = [];
        for (let i = 0; i < this.props.formContent.ids.length; i++) {
            let objectKey = `${newFormKey}-${i}`
            if (this.props.formContent.ids[i] === 'responsibilities' || this.props.formContent.ids[i] === 'activities-and-awards') {
                inputObjects.push({listKey: objectKey, inputList: []});
            } else {
                inputObjects.push({itemKey: objectKey, itemValue: ''});
            }
        }
        if (this.props.formType === 'p') {
            this.setState({forms: [...this.state.forms, {formKey: newFormKey, formInputs: inputObjects}]});    
        } else {
            this.setState({forms: [...this.state.forms, {formKey: newFormKey, listLength: 0, formInputs: inputObjects}]});
        }
    }
    removeForm(e) {
        this.setState({forms: this.state.forms.filter(form => form.formKey !== e.target.dataset.formKey)});
    }

    addItem() {
        // add item to inputList
    }
    removeItem() {
        // remove item from inputList
    }
    handleChange() {
        // change item value
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
                                    handleChange={this.handleChange}/>);
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
