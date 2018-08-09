import React, {Component} from 'react';
import {connect} from 'react-redux';
import { 
    fetchProgramByIdAndPreLoadState,
    editingProgramInputFieldOnChange,
    editProgram,
    deleteThisProgram
} from '../actions';
import Header from '../components/Header';
import requireAuth from '../components/requireAuth';

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

    handleDelete = () => {
        this.props.deleteThisProgram(this.props.match.params.id);
        this.props.history.go(-1);

        // this.props.deleted = false;
    }

    render() {
            return (
                <div className="wrapper">
                    <Header/>
                    <section className="exhibitions">
                        <h1 className="exhibitions__title">Edit this Program</h1>
                        <div className="formCard">
                        <button className="exhibitions__btn" onClick={this.handleDelete}>Delete</button>
                        <form 
                            className="formCard__form"
                            onSubmit={this.handleFormSubmit}>
                            <div className="formCard__formGroup">
                                <label className="label">Title</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.title}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Picture</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.picture}
                                    name='picture'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Price</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.price}
                                    name='price'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Description</label>
                                <textarea
                                    className="formCard__formInput"
                                    value={this.props.description}
                                    name='description'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Time</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.time}
                                    name='time'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Member Information</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.memberInfo}
                                    name='memberInfo'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Registration Link</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.registrationLink}
                                    name='registrationLink'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <input className='audioLinkBtn' type='submit' value='Submit'/>
                            </div>
                        </form>
                    </div>
                    </section>
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
        registrationLink: state.editingPrograms.registrationLink,
        deleted: state.deletingPrograms.deleted
    }
}

export default requireAuth(connect(mapStateToProps, {
    fetchProgramByIdAndPreLoadState,
    editingProgramInputFieldOnChange,
    editProgram,
    deleteThisProgram
})(ProgramEditAndRemoval));