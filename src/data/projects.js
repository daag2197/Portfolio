import project1 from '../assests/project1.png';
import project2 from '../assests/project2.png';
import project3 from '../assests/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React app that I build',
        link: 'https://github.com/daag2197/Portfolio',
        image: project1,
    },
    {
        id:2,
        title: 'API with node.js',
        description: 'Node.js app with express and sequelize',
        link: 'https://github.com/daag2197/Soccer-Field-Manager',
        image: project2,
    },
    {
        id:3,
        title: 'Digital Finger Reader',
        description: 'C# app to manage digital finger reader',
        link: 'https://github.com/daag2197/LectorHuellasConsola',
        image: project3,
    }
];

export default PROJECTS;