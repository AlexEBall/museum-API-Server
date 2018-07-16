import React, {Component} from 'react';
import {connect} from 'react-redux';
import { 
    addProgram,
    addingProgramInputFieldOnChange
} from '../actions';
import Header from '../components/Header';

class ProgramToAdd extends Component {
    handleInputs = (event) => {
        const text = event.target.value;
        const name = event.target.name;

        this.props.addingProgramInputFieldOnChange(name, text);
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

        this.props.addProgram(programData);

        this.props.history.go(-1);
    }

    render() {
        console.log('whoaaaaa, props: ', this.props);
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                    <h1 className="exhibitions__title">Add a Program</h1>
                    <div className="formCard">
                        <form
                            className="formCard__form" 
                            onSubmit={this.handleFormSubmit} >
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
}

const mapStateToProps = state => {
    return {
        title: state.addingPrograms.title,
        picture: state.addingPrograms.picture,
        description: state.addingPrograms.description,
        price: state.addingPrograms.price,
        time: state.addingPrograms.time,
        memberInfo: state.addingPrograms.memberInfo,
        registrationLink: state.addingPrograms.registrationLink
    }
}

export default connect(mapStateToProps, { 
    addProgram,
    addingProgramInputFieldOnChange 
})(ProgramToAdd);