import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExhibitions} from '../actions';

class Exhibitions extends Component {
    render() {
        return (
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
                    <h1 className="content__title">These are the current exhibitions</h1>
                    
                </section>
                <footer className="footer">
                </footer>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        fetching: state.exhibitions.fetching,
        fetched: state.exhibitions.fetched,
        error: state.exhibitions.error,
        exhibitions: state.exhibitions.data
    }
}

export default connect(mapStateToProps, { fetchExhibitions })(Exhibitions);