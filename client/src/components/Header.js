import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav__homePageLink">
                    <h2 className="nav__title">The Craft and Folk Art Museum</h2>
                </Link>
                <div className="nav__space-box"></div>
                <div className="nav__links-box">
                    <ul className="nav__links-ul">
                        <li className="nav__links-li">
                            <a className="nav__links" href="#">Log In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}