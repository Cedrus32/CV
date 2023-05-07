import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class Display extends Component {
    render() {
        let divClass;
        if (this.props.displayType === 'p') {
            divClass = 'header';
        } else {
            divClass = 'experience';
        }

        let displayElements = [];
        if (this.props.displayContent !== undefined) {
            let dateValues = [];
            let listValues = [];
            let formItem;
            for (let i = 0; i < this.props.displayContent.formItems.length; i++) {
                formItem = this.props.displayContent.formItems[i];
                // console.log(item.itemID, item.itemValue);
                if (formItem.itemID.includes('date')) {
                    if (formItem.itemValue !== '') {
                        dateValues.push(this.props.displayContent.formItems[i].itemValue);
                    }
                } else if ((formItem.itemID === 'responsibilities' || formItem.itemID === 'activities-and-awards')) {
                    if (formItem.itemValue !== '') {
                        listValues.push(...formItem.itemValue.split('\n'));
                    }
                } else {
                    console.log('last else...', formItem.itemID);
                    displayElements.push(<span key={uniqid()} id={formItem.itemID}>{formItem.itemValue}</span>);
                }
            }
            if (this.props.displayType !== 'p') {
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
                    displayElements.push(<ul key={uniqid()} id={formItem.itemID}></ul>)
                }
            }
        }

        return (
            <div className={divClass}>
                {displayElements} 
            </div>
        )
    }
}

Display.propTypes = {
    displayType: PropTypes.string,
    displayContent: PropTypes.object,
};

export default Display;
