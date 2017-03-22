import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FetchWeather from '../redux/actions';

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.onSearchChange     =   this.onSearchChange.bind(this);
        this.onFormSubmit       =   this.onFormSubmit.bind(this);

        this.state = {
            searchTerm: ''
        }
    }

    onSearchChange(evt) {
        this.setState({ searchTerm: evt.target.value });
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({searchTerm: ''});
    
    } 
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter city name....." 
                        value={this.state.searchTerm} onChange={this.onSearchChange}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </span>
                </div>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather: FetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);