import React, { Component } from 'react';

import Searchbar from '../containers/searchbar';

export default class Header extends Component {

    render() {
        return (
            <div className="page-header">
                <Searchbar />
            </div>
        );
    }
}