import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="search-container">
                <input onChange={this.props.handleSearch} placeholder="Type anything to search" type="text"/>
            </div>
        );
    }
}

export default Search;