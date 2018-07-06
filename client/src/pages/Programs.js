import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPrograms} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Programs extends Component {
    componentWillMount = () => {
        this.props.Programs();
    }

    renderContent = () => {
        let exhibitions = this.props.programs;
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
                                    <button className="exhibitions__btn">Floor {exhib.floor}</button>
                                </Link>
                            )
                        })}
                    </div>
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
                <Header />
                <section className="exhibitions">
                    <h1 className="exhibitions__title">These are the current programs</h1>
                    
                </section>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.programs.fetching,
        fetched: state.programs.fetched,
        error: state.programs.error,
        programs: state.programs.programs
    }
}

export default connect(mapStateToProps, { fetchPrograms })(Programs);