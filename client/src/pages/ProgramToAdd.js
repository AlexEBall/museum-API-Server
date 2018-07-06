import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addingProgramInputFieldOnChange } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ProgramToAdd extends Component {
    handleInputs = (event) => {
        const text = event.target.value;
        const name = event.target.name;

        this.props.addingProgramInputFieldOnChange(name, text);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('logged');
    }
    render() {
        console.log('whoaaaaa, props: ', this.props);
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                    <h1 className="exhibitions__title">Add a Program</h1>
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
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Price</label>
                                <input
                                    value={this.props.price}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Description</label>
                                <textarea
                                    value={this.props.description}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Time</label>
                                <input
                                    value={this.props.time}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Member Information</label>
                                <input
                                    value={this.props.memberInfo}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <label>Registration Link</label>
                                <input
                                    value={this.props.registrationLink}
                                    name='title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="programCard__formGroup">
                                <button onClick={this.handleFormSubmit}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.editPrograms.title,
        picture: state.editPrograms.picture,
        description: state.editPrograms.description,
        price: state.editPrograms.price,
        time: state.editPrograms.time,
        memberInfo: state.editPrograms.memberInfo,
        registrationLink: state.editPrograms.registrationLink
    }
}

export default connect(mapStateToProps, { addingProgramInputFieldOnChange })(ProgramToAdd);