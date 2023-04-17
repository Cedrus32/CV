import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import Form from './Form';
import Button from './Button';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            addBtn: null,
            
            // testCount: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'p') {
            this.setState({forms: [<Form key={uniqid()} formType={this.props.formType} formLabels={this.props.formContent.labels}/>]});
        } else {
            this.setState({addBtn: <Button do='addSection' handleClick={this.handleClick} buttonContent='Add'/>})
        }
    }

    handleClick(e) {
        // console.log(e);
        // console.log('props', this.props);
        
        let formsCopy = this.state.forms;
        formsCopy.push(<Form key={uniqid()} formType={this.props.formType} formLabels={this.props.formContent.labels}/>);
        this.setState({forms: formsCopy});

        // this.setState({testCount: this.state.testCount + 1});
    }

    componentDidUpdate() {
        console.log(this.props.formType, 'component did update');
        console.log('state', this.state);
    }

    render() {
        return (
            <section id={this.props.formType}>
                <h1 className='form-header'>{this.props.formContent.title}</h1>
                {this.state.forms.map(item => (
                    <div key={uniqid()} className='form'>
                        {item}
                    </div>
                ))}
                {this.state.addBtn}

                {/* {this.state.testCount} */}
            </section>
        );
    }
}
FormSection.propTypes = {
    formType: PropTypes.string.isRequired,
    formContent: PropTypes.object.isRequired,
};

export default FormSection;
