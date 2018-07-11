import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProgramById} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ProgramEditAndRemoval extends Component {
    componentWillMount = () => {
        this.props.fetchProgramById(this.props.match.params.id);
    }

    render() {
        console.log('whoaaaaa, props: ', this.props);
        // console.log('heyyyyaaaa', this.state.programs.programById);
        let program = this.props.programById;
        if (!program) {
           return <h2>Loading Programs... please wait</h2>
        } else {
            return (
                <div className="wrapper">
                    <Header/>
                    <section className="exhibitions">
                        <h1 className="exhibitions__title">Add a Program</h1>
                    </section>
                    <Footer/>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.programs.fetching,
        fetched: state.programs.fetched,
        error: state.programs.error,
        programById: state.programs.programs
    }
}

export default connect(mapStateToProps, {
    fetchProgramById
})(ProgramEditAndRemoval);