import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
    const style = {
        display: 'inline-block',
        margin: 10
    };

    return (
        <div>
            < div className = 'navDiv' >
                <h4 style = {style}><Link to = '/' className = 'navFontColor'>Home</Link></h4>
                <h4 style = {style} ><Link to = '/jokes' className = 'navFontColor'>Jokes</Link></h4>
                 <h4 style = {style} ><Link to = '/music-master' className = 'navFontColor'>Music Master</Link></h4>
            </div>
            {children}
        </div>
    )

}
export default Header;