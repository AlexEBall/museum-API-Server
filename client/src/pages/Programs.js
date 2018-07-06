import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPrograms} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Programs extends Component {
    componentWillMount = () => {
        this.props.fetchPrograms();
    }

    renderContent = () => {
        let programs = this.props.programs;
        if (!programs) {
           return <h2>Loading Programs... please wait</h2>
        } else {
            console.log(programs);
            return(
            <div className="exhibitions__content-box">
                <div className="exhibitions__individual-container">
                    <h3>Programs</h3>
                    <img src="http://fillmurray.com/300/300" alt="coverImg"/>
                </div>
            </div>
           );
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

// {Exhibition.floors.map(exhib => {
//                             console.log('DOGAIUGPAIDVJAS', exhib.floor);
//                             return (
//                                 <Link to={'/exhibitionFloor' + exhib.floor} key={exhib.floor}>
//                                     <button className="exhibitions__btn">Floor {exhib.floor}</button>
//                                 </Link>
//                             )
//                         })}