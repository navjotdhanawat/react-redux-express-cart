import React, { Component } from 'react';

// Navigation components
function NavbarComponent(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="">urKirana</a>
                    <div className="form-group search-input">
                        <input onChange={props.onChange} type="text" className="form-control" id="keyword" placeholder="Search Products"></input>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;