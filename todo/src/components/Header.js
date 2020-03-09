import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">BestTodo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                      
                        <li className="nav-item">
                            <Link className="nav-link" to={'/login'}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/users'}>Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/todos'}>Todos</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;