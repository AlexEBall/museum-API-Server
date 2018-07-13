import React, {Component} from 'react';
import {connect} from 'react-redux';
import { 
    fetchProgramByIdAndPreLoadState,
    editingProgramInputFieldOnChange,
    editProgram
} from '../actions';
import Header from '../components/Header';
// import ProgramCard from '../components/ProgramCard';
import Footer from '../components/Footer';

class ProgramEditAndRemoval extends Component {
    componentWillMount = () => {
        this.props.fetchProgramByIdAndPreLoadState(this.props.match.params.id);
    }

    handleInputs = (event) => {
        const text = event.target.value;
        const name = event.target.name;

        this.props.editingProgramInputFieldOnChange(name, text);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('logged');

        const programData = {
            title: this.props.title,
            picture: this.props.picture,
            description: this.props.description,
            price: parseInt(this.props.price),
            time: this.props.time,
            memberInfo: this.props.memberInfo,
            registrationLink: this.props.registrationLink
        }

        this.props.editProgram(programData, this.props.match.params.id);

        this.props.history.go(-1);
    }

    render() {
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
                                    value={this.props.title}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Picture</label>
                                <input
                                    value={this.props.picture}
                                    name='picture'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Price</label>
                                <input
                                    value={this.props.price}
                                    name='price'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Description</label>
                                <textarea
                                    value={this.props.description}
                                    name='description'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Time</label>
                                <input
                                    value={this.props.time}
                                    name='time'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Member Information</label>
                                <input
                                    value={this.props.memberInfo}
                                    name='memberInfo'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Registration Link</label>
                                <input
                                    value={this.props.registrationLink}
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
    // }
}

const mapStateToProps = state => {
    return {
        fetching: state.programs.fetching,
        fetched: state.programs.fetched,
        error: state.programs.error,
        title: state.editingPrograms.title,
        picture: state.editingPrograms.picture,
        description: state.editingPrograms.description,
        price: state.editingPrograms.price,
        time: state.editingPrograms.time,
        memberInfo: state.editingPrograms.memberInfo,
        registrationLink: state.editingPrograms.registrationLink
    }
}

export default connect(mapStateToProps, {
    fetchProgramByIdAndPreLoadState,
    editingProgramInputFieldOnChange,
    editProgram
})(ProgramEditAndRemoval);