import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link to="/artistes">Artistes</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Nav;