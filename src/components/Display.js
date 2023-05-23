import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const Display = (props) => {
    let displayType = props.displayType;
    let displayContent = props.displayContent;

    let divClass;
    if (displayType === 'p') {
        divClass = 'header';
    } else {
        divClass = 'experience';
    }

    let displayElements = [];
    if (displayContent !== undefined) {
        let dateValues = [];
        let listValues = [];
        let formItem;
        for (let i = 0; i < displayContent.fields.length; i++) {
            formItem = displayContent.fields[i];
            if (formItem.itemID === 'objective' && formItem.itemValue !== '') {
                displayElements.push(<div key={uniqid()} className='divider'></div>);
                displayElements.push(<span key={uniqid()} id={formItem.itemID}>{formItem.itemValue}</span>);
            } else if (formItem.itemID.includes('date')) {
                if (formItem.itemValue !== '') {
                    dateValues.push(displayContent.fields[i].itemValue);
                }
            } else if ((formItem.itemID === 'responsibilities' || formItem.itemID === 'activities-and-awards')) {
                if (formItem.itemValue !== '') {
                    listValues.push(...formItem.itemValue.split('\n'));
                }
            } else {
                displayElements.push(<span key={uniqid()} id={formItem.itemID}>{formItem.itemValue}</span>);
            }
        }
        if (displayType !== 'p') {
            if (dateValues.length > 0) {
                displayElements.push(<span key={uniqid()} id='date'>{dateValues.join(' - ')}</span>);
            } else if (dateValues.length === 0) {
                displayElements.push(<span key={uniqid()} id='date'>{''}</span>);
            }
            if (listValues.length > 0) {
                let listElements = [];
                listValues.forEach(listItem => listElements.push(<li key={uniqid()}>{listItem}</li>));
                displayElements.push(<ul key={uniqid()}>{listElements}</ul>);
            } else if (listValues.length === 0) {
                displayElements.push(<ul key={uniqid()} id={formItem.itemID}></ul>);
            }
        }
    }

    return (
        <div className={divClass}>
            {displayElements}
        </div>
    )
}
Display.propTypes = {
    displayType: PropTypes.string,
    displayContent: PropTypes.object,
}

export default Display;
