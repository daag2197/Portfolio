import React,{ Component } from 'react';

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
            </div>
        )
    }
}

export default App;