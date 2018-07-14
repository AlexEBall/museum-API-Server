import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Home extends Component {
    render() {
        return(
            <div className="wrapper">
                <Header />
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
            </div>
        );
    }

};
