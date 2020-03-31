import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <a className="navbar-brand" href="/">PGS</a>

                {
                
                /* we wont be needing this for now 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    
                */

                }

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
                    { /* and this as well
                    
                     <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#Home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#About">About</a>
                    </li>
                </ul>

                    */}
                                 </div>
                </nav>
            
                
            
        )
    }
}

export default Header;