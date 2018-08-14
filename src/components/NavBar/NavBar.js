import React from "react";

const NavBar = props => (
<div>
<nav className="navbar is-transparent">      
<div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
        <a className="navbar-item" href="/">
            Home
        </a>
    </div>
    
    <div className="navbar-end">
        <div className="navbar-item">
            <div className="field is-grouped">
                <p className="control">
                    Score: {props.score}
                </p>
                <p className="control">
                    Top Score: {props.topScore}
                </p>
            </div>
        </div>
    </div>
</div>
</nav>
</div>
);

export default NavBar;