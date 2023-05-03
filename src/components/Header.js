import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
        }
    }

    componentDidMount() {
        this.setState({mounted: true});
    }

    render() {
        let displayValues = {name: null, website: null, location: null, phone: null, email: null, objective: null};
        if (this.state.mounted === true) {
            for (let i = 0; i < this.props.displayContent['0'].formItems.length; i++) {
                displayValues[this.props.displayContent['0'].formItems[i].itemID] = this.props.displayContent['0'].formItems[i].itemValue
            }
        }

        return (
            <>
                <h2>{displayValues.name}</h2>
                <span>{displayValues.website}</span>
                <span>{displayValues.location}</span>
                <span>{displayValues.phone}</span>
                <span>{displayValues.email}</span>
                <span>{displayValues.objective}</span>
            </>
        )
    }
}
Header.propTypes = {
    displayContent: PropTypes.array.isRequired,
}

export default Header;
