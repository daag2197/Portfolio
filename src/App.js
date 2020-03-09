import React,{ Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assests/Profile.jpg';

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
                < img src = {profile} alt = 'profile' className = "profile" / >
                <h1>Hello!</h1>
                <p>My name is Diego Arevalo, I am Computer Enginner</p>
                <p>I am always learn something different</p>
                {
                    this.state.displayBio ? (
                        <div>
                        <p> I live in Dublin, and I love Practice Table tennis </p>
                        <p>Now I start to learn React.js</p>
                        <button onClick = {this.toogleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                       <div>
                           <button onClick = {this.toogleDisplayBio}>Read More</button>
                       </div> 
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;