import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProgramById} from '../actions';
import Header from '../components/Header';
// import ProgramCard from '../components/ProgramCard';
import Footer from '../components/Footer';

class ProgramEditAndRemoval extends Component {
    componentWillMount = () => {
        this.props.fetchProgramById(this.props.match.params.id);
    }

    handleInputs = (event) => {
        const text = event.target.value;
        const name = event.target.name;
    }

    render() {
        let program = this.props.programById;
        if (!program) {
           return <h2>Loading Programs... please wait</h2>
        } else {
            console.log(this.props);
            console.log('does this return progam by id', program);
            return (
                <div className="wrapper">
                    <Header/>
                    <section className="exhibitions">
                        <h1 className="exhibitions__title">Edit this Program</h1>
                        <div className="programCard">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="programCard__formGroup">
                                <label>Title</label>
                                <input
                                    value={program.title}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Picture</label>
                                <input
                                    value={program.picture}
                                    name='picture'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Price</label>
                                <input
                                    value={program.price}
                                    name='price'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Description</label>
                                <textarea
                                    value={program.description}
                                    name='description'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Time</label>
                                <input
                                    value={program.time}
                                    name='time'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Member Information</label>
                                <input
                                    value={program.memberInfo}
                                    name='memberInfo'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Registration Link</label>
                                <input
                                    value={program.registrationLink}
                                    name='registrationLink'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <input className='exhibitions__btn' type='submit' value='Submit'/>
                            </div>
                        </form>
                    </div>
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
        programById: state.programs.programById
    }
}

export default connect(mapStateToProps, {
    fetchProgramById
})(ProgramEditAndRemoval);