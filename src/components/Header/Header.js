import React from 'react';
import logo from '../../udemy.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container-fluid'>
                <a className="navbar-brand" href="#">
                    
                    <img style={{ width:"40px", height:"40px"}} src={logo}  alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="/Courses">Courses <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="/Features">Features</a>
                        <a className="nav-link" href="/Pricing">Pricing</a>
                        
                    </div>
                </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;