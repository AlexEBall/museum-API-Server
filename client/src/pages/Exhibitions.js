import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExhibitions} from '../actions';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Exhibitions extends Component {
    componentWillMount = () => {
        this.props.fetchExhibitions();
    }

    renderContent = () => {
        let exhibitions = this.props.exhibitions[0];
        if (!exhibitions) {
            return <h2>Loading Exhibitions... please wait</h2>
        } else {
            return (

                    <div className="exhibitions__individual-container">
                        <h3>{exhibitions.tourAudience}</h3>
                        <div className="exhibitions__btn-container">
                            {exhibitions.floors.map(exhib => {
                                return (
                                    <Link to={'/exhibitionFloor' + exhib.floor} key={exhib.floor}>
                                        <button className="exhibitions__btn">Floor {exhib.floor}</button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

            );
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                    <h1 className="exhibitions__title">These are the current exhibitions</h1>
                    {this.renderContent()}
                </section>
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