import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
            <div className="wrapper">
                <header className="header">
                    <nav className="nav">
                        <h2 className="nav__title">CAFAM Mobile App CMS</h2>
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
                <section className="content">
                    <h1 className="content__title">What would you like to do?</h1>
                    <div className="content__choices">
                        <Link to="/exhibitions">
                            <button className="content__btn">
                                Edit Exhibitions
                            </button>
                        </Link>
                        <Link to="/programs">
                            <button className="content__btn">
                                Edit Programs
                            </button>
                        </Link>
                    </div>
                </section>
                <footer className="footer">
                </footer>
            </div>
        );
    }
};