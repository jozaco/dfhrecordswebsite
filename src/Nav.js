import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <React.Fragment>
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <Link to="/" className="nav-menu-item-link">Inici</Link>
                    </li>
                    <li className="nav-menu-item">
                        <Link to="/artistes" className="nav-menu-item-link">Artistes</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Nav;