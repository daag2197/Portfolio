import React,{ Component } from 'react' ;
import PROJECTS from './data/projects';

class Project extends Component {
    render(){
        console.log('this.props',this.props);

        const { title,image,descrition,link} = this.props.project;

        return(
            <div style = {{ display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src = {image} alt = 'profile' style = {{ width: 200, height: 120 }}/>
                <p>{descrition}</p>
                <a href = {link}>Check More</a>
            </div>
        )
    }
}


class Projects extends Component {
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                //<div key = {PROJECT.id}>{PROJECT.title}</div>
                                <Project key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;