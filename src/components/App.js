import React, { Component } from 'react';
import FormSection from './FormSection';
import Header from './Header';
import DisplaySection from './DisplaySection';

class App extends Component {
    constructor(props) {
        super(props);
        this.content = {
            personal: {
                title: 'Personal Details',
                labels: ['Name', 'Website', 'Location', 'Phone', 'Email', 'Objective for Applying'],
                ids: ['name', 'website', 'location', 'phone', 'email', 'objective']
            },
            work: {
                title: 'Work Experience',
                labels: ['Position', 'Company', 'Location', 'Start', 'End', 'Responsibilities'],
                ids: ['position', 'company', 'location', 'start-date', 'end-date', 'responsibilities']
            },
            education: {
                title: 'Education',
                labels: ['Field of Study', 'Institution', 'Location', 'Graduated', 'Activities and Awards'],
                ids: ['field-of-study', 'institution', 'location', 'graduated-date', 'activities-and-awards']
            }
        }
    }
    
    render() {
        return (
            <>
                <section id='interact'>
                    <FormSection formType='p' formContent={this.content.personal}/>
                    <FormSection formType='w' formContent={this.content.work}/>
                    <FormSection formType='e' formContent={this.content.education}/>
                </section>
                <section id='display'>
                    <Header/>
                    <DisplaySection sectionType='w'/>
                    <DisplaySection sectionType='e'/>
                </section>
            </>
        )
    }
}

export default App;
