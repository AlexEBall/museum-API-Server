import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
        <header className="header">
            <nav className="nav">
                <h2 className="nav__title">CAFAM Mobile App CMS</h2>
                <div className="nav__space-box"></div>
                <div className="nav__links-box">
                    <ul className="nav__links-ul">
                        <li className="nav__links-li">
                            <a className="nav__links" href="#">Something</a>
                        </li>
                        <li className="nav__links-li">
                            <a className="nav__links" href="#">Something 2</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}