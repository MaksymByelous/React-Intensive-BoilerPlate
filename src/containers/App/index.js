// Core
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { string } from 'prop-types';

// Instruments
import avatar from '../../theme/assets/avatar.jpg';
import Feed from '../../components/Feed';
import Catch from '../../components/Catch';
const groupID = 'l1lz1az2m5';


export const options = {
    firstName: 'Max',
    lastName:  'Bels',
    avatar,
    api:       `https://lab.lectrum.io/feed/${groupID}`
};

export default class App extends Component {
    static childContextTypes = {
        firstName: string.isRequired,
        lastName:  string.isRequired,
        avatar:    string.isRequired,
        api:       string.isRequired
    }
    getChildContext () {
        return {
            firstName: options.firstName,
            lastName:  options.lastName,
            avatar:    options.avatar,
            api:       options.api
        };
    }
    render () {
        return (
            <Catch>
                <Feed />
            </Catch>
        );
    }
}
