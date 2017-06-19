import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectedAutoComplete from '../AutoComplete/ConnectedAutoComplete';

class BodyComponent extends Component {
    render() {
        return (
            <div>
                Body
                <ConnectedAutoComplete/>
            </div>
        );
    }
}

BodyComponent.propTypes = {

};

export default BodyComponent;