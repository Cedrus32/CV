import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Display from './Display';

const DisplaySection = (props) => {
    const [mounted, setMounted] = useState(false);
    let sectionType = props.sectionType;
    let displayContent = props.displayContent;

    // componentDidMount
    useEffect(() => {setMounted(true)}, []);

    let sectionID;
    if (sectionType === 'p') {
        sectionID = 'personal-display';
    } else if (sectionType === 'w') {
        sectionID = 'work-display';
    } else if (sectionType === 'e') {
        sectionID = 'education-display';
    }

    let sectionTitle;
    if (sectionType === 'w' && displayContent.length > 0) {
        sectionTitle = <><h2>Work Experience</h2><div className='divider'></div></>;
    } else if (sectionType === 'e' && displayContent.length > 0) {
        sectionTitle = <><h2>Education Experience</h2><div className='divider'></div></>;
    }

    let displayElements = [];
    if (mounted) {
        displayContent.forEach(formContent => {
            displayElements.push(<Display key={uniqid()} displayType={sectionType} displayContent={formContent}/>);
        });
    }

    return (
        <section id={sectionID}>
            {sectionTitle}
            {displayElements}
        </section>
    )
}
DisplaySection.propTypes = {
    sectionType: PropTypes.string,
    displayContent: PropTypes.array,
}

export default DisplaySection;
