import React,{ Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Track from './Track';


const API_SPOTIFY = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {
    state = {artist: null,tracks : []};

    searchArtist = artistQuery => {
        event.preventDefault();
        fetch(`${API_SPOTIFY}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {

                if(json.artists.total > 0) {
                    const artist = json.artists.items[0];
    
                    this.setState({artist});

                    fetch(`${API_SPOTIFY}/artist/${artist.id}/top-tracks`)
                    .then(response => response.json())
                    .then(json => this.setState({tracks: json.tracks }))
                    .catch(err => alert(err.message));
                }
            })
            .catch (err => alert(err.message));
    }
    render(){
        return(
            <div>
                <h2 className = ' justify-content-center'>Music Master (Spotify API'S)</h2>
                <Search searchArtist = {this.searchArtist} />
                <hr/>
                <Artist artist = {this.state.artist}/>
                <Track tracks = {this.state.tracks}/>
            </div>
        )
    }
}
export default App;


