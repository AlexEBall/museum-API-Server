import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExhibitions} from '../actions';
import {Link} from 'react-router-dom';

class Exhibitions extends Component {
    componentWillMount = () => {
        this.props.fetchExhibitions();
    }

    renderContent = () => {
        let exhibitions = this.props.exhibitions;
        if (!exhibitions) {
           return <h2>Loading Exhibitions... please wait</h2>
        } else {
            const Exhibition = exhibitions[0];
            console.log('TOUR AUDIENCE', typeof(tourAudience));
            if (!Exhibition) {
                console.log('sorry');
            } else {
                console.log('THIS RENDERING TIME', Exhibition.tourAudience);
            return(
            <div className="exhibitions__content-box">
                <div className="exhibitions__individual-container">
                    <h3>{Exhibition.tourAudience}</h3>
                    <img src="http://fillmurray.com/300/300" alt="coverImg"/>
                    <div className="exhibitions__btn-container">
                        {Exhibition.floors.map(exhib => {
                            console.log('DOGAIUGPAIDVJAS', exhib.floor);
                            return (
                                <Link to={'/exhibitionFloor' + exhib.floor} key={exhib.floor}>
                                    <button className="exhibitions__btn">Floor 1</button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="exhibitions__individual-container">
                    <h3>General</h3>
                    <img src="http://fillmurray.com/300/300" alt="coverImg"/>
                </div>
            </div>
           );
            }
        }
    }

    render() {
        console.log(this.props);
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
                <section className="exhibitions">
                    <h1 className="exhibitions__title">These are the current exhibitions</h1>
                    {this.renderContent()}
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
        exhibitions: state.exhibitions.exhibitions
    }
}

export default connect(mapStateToProps, { fetchExhibitions })(Exhibitions);