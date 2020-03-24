import React, {Component} from 'react';
import Button from "components/CustomButtons/Button.js";

const Joke = ({joke: {setup,punchline} }) => (
     <p className = 'JokesP'>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: []};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke:json}))
        .catch(err => console.log("Error: " + err));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes:json}))
        .catch(err => console.log("Error: " + err));
    }

    render() {
        return (
            <div>
                <Joke joke = {this.state.joke} />
                <hr/>
                <h3>Others Jokes?</h3>

                { this.state.jokes.map(joke => (<Joke key = {joke.id} joke = {joke} />))}
                <Button
                onClick = {this.fetchJokes}
                color = "primary">
                    Click me!
                </Button>
            </div>
        );
    }
}

export default Jokes;