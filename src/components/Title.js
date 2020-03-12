import React, { Component } from 'react';

const TITLES = [
    'a software enginer',
    'a Table Tennis Lover',
    'an enthusiastic learner',
    'always learn something different'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};
    
    componentDidMount(){
        this.timeout = setTimeout(()=> this.setState({fadeIn:false}),2000);
        this.animateTitles();
    }

    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            
            this.setState({titleIndex,fadeIn:true});
            
            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);

        },4000);
    }

    render(){
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[this.state.titleIndex];
        return(
            <p className = 'headerFontColor'>I am {title}</p>
        )
    }
}

export default Title;