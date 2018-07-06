import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ProgramToAdd extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                    <h1 className="exhibitions__title">Add a Program</h1>
                    <div className="programCard">
                        <form>
                            <div className="programCard__formGroup">
                                <label>Title</label>
                                <input />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Picture</label>
                                <input />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Price</label>
                                <input />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Description</label>
                                <textarea />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Time</label>
                                <input />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Member Information</label>
                                <input />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Registration Link</label>
                                <input />
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}