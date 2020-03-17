import React, { Component } from 'react';

class Search extends Component {

    state = {artistQuery: ''};

     updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value});
    }
    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }
    searchArtist = () => {
        this.props.searchArtist( this.state.artistQuery);
    }
    render() {
        return (
            <div>
                < form className = 'form-inline justify-content-center' >
                    <div className = "form-group mx-sm-3 mb-2">
                        <input 
                        className = 'form-control' 
                        onKeyPress = {this.handleKeyPress} 
                        onChange = {this.updateArtistQuery} 
                        placeholder= 'Search for an Artist' />
                    </div>
                    <button onClick = {this.searchArtist} className = 'btn btn-info mb-2'>Search</button>
                </form>
            </div>
        )
    }
}

export default Search;