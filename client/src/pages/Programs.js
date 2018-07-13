import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPrograms} from '../actions';
import Header from '../components/Header';
import ProgramCard from '../components/ProgramCard';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

class Programs extends Component {
    componentWillMount = () => {
        this.props.fetchPrograms();
    }

    renderPage = () => {
        let programs = this.props.programs;
        if (!programs) {
           return <h2>Loading Programs... please wait</h2>
        } else {
            console.log(programs);
            return(
            <div className="exhibitions__content-box">
                <div className="exhibitions__individual-container">
                    <h3>Programs</h3>
                    {programs.map((program, i) => {
                        return (
                        <ProgramCard 
                            key={i}
                            program={program} />
                        )
                    })}
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
                    <Link to="/programs/toAdd">
                        <button className="exhibitions__btn">
                            Add a Program
                        </button>
                    </Link>
                    {this.renderPage()}
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