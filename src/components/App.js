import React, { Component } from 'react';
import FormSection from './FormSection';

class App extends Component {
    constructor(props) {
        super(props);
        this.content = {
            personal: {
                title: 'Personal Details',
                labels: ['Name', 'Website', 'Location', 'Phone', 'Email', 'Objective for Applying']
            },
            work: {
                title: 'Work Experience',
                labels: ['Company', 'Position', 'Location', 'Start', 'End', 'Responsibilities']
            },
            education: {
                title: 'Education',
                labels: ['Field of Study', 'Institution', 'Location', 'Graduated', 'Activities and Awards'] 
            }
        }
    }
    
    render() {
        return (
            <>
                <section id='interact'>
                    <FormSection type='p' content={this.content.personal}/>
                    <FormSection type='w' content={this.content.work}/>
                    <FormSection type='e' content={this.content.education}/>
                </section>
                <section id='display'></section>
            </>
        )
    }
}

export default App;
