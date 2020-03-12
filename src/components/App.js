import React,{ Component } from 'react';
import Projects from './Projects';
import Title from './Title';
import SocialProfiles from './SocialProfiles';
import Jokes from './Jokes';
import profile from '../assests/Profile.jpg';

class App extends Component {
    state = {
        displayBio: false
    };

    //Metodo que oculta y muestra la biografia 
    toogleDisplayBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        })
    }

    render(){
        return(
            <div>
                <div className = "headerDiv">
                    <img src = {profile} alt = 'profile' className = "profile" / >
                    <h1 className = 'headerFontColor'> Hello! </h1>
                    <p className = 'headerFontColor'> My name is Diego Arevalo </p>
                    < Title / >
                    {
                        this.state.displayBio ? (
                            <div>
                            <p className = 'headerFontColor'> I live in Dublin, and I love Practice Table tennis </p>
                            <p className = 'headerFontColor'>Now I start to learn React.js</p>
                            <button onClick = {this.toogleDisplayBio} className = "btn btn-success">Show Less</button>
                            </div>
                        ) : (
                        <div>
                            <button onClick = {this.toogleDisplayBio} className = "btn btn-success">Read More</button>
                        </div> 
                        )
                    }
                    <hr/>
                    </div>
                <Projects/>
                <hr/>
                <SocialProfiles/>
                <hr/>
                <Jokes/>
            </div>
        )
    }
}

export default App;