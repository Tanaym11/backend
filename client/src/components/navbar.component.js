import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className ="navbar-brand">Studentapp</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Students</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Student Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/college" className="nav-link">Create College</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/colleges-list" className="nav-link">Colleges list</Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}