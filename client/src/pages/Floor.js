import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFloor, editingDisabled, audioLinkOnChange, audioLinkUpdating} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import {Link} from 'react-router-dom';

class Floor extends Component {
    componentWillMount = () => {
        const floor = parseInt(this.props.match.params.floor);
        this.props.fetchFloor(floor);
    }

    toggleInputFields = () => {
        console.log('clicked');
        this.props.editingDisabled(true);
    }

    handleAudioLinkUpdate = event => {
        const value = event.target.value;
        this.props.audioLinkOnChange(value)
    }

    submitAudioLinkUpdate = event => {
        console.log('what happens here?', this.props)
        const floor = parseInt(this.props.match.params.floor);
        this.props.audioLinkUpdating(this.props.audioLinkValue, floor);
        this.props.editingDisabled(false);


    }

    renderEditingField = () => {
        if (this.props.editDisabled) {

            return (
                <div className="exhibitions__inputBox">
                    <h3 className="heading__3">Audio Link</h3>
                    <input 
                        value={this.props.audioLinkValue}
                        onChange={this.handleAudioLinkUpdate}
                        name="audioLinkValue"
                        placeholder="Copy an AWS Link"
                    />
                    <button 
                        className="exhibitions__btn" 
                        onClick={this.submitAudioLinkUpdate}
                        >Submit
                    </button>
                </div>
            )

        } else {

            return (
            <div className="exhibitions__inputBox">
                            <h3 className="heading__3">Audio Link</h3>
                            <h3 className="heading__3">{this.props.floor.audioLink}</h3>
                            <button 
                                className="exhibitions__btn" 
                                onClick={this.toggleInputFields}
                                >Edit
                            </button>
                        </div>
            )
        }
    }

    renderFloorInformation = () => {
        const floorInformation = this.props.floor;
        if (!floorInformation) {
            return(
                <div className="exhibitions__content-box">
                    <div className="exhibitions__individual-container">
                        <h2>Loading</h2>
                    </div>
                </div>
            )
        } else {
            console.log('flllloooreiausodius', floorInformation);
            return(
                <div className="exhibitions__content-box">
                    <div className="exhibitions__individual-container">
                        <h2>Floor {floorInformation.floor}</h2>
                        <img className="exhibitions__coverImg" src={floorInformation.coverPic} alt='floor 1 app pic' />

    
                        {this.renderEditingField()}


                    </div>
                </div>
            )
        }
    }

    render() {
        console.log('is this working?', this.props);
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                    {this.renderFloorInformation()}
                </section>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        fetching: state.floor.fetching,
        fetched: state.floor.fetched,
        error: state.floor.error,
        floor: state.floor.floor,
        editDisabled: state.input.editDisabled,
        audioLinkValue: state.input.audioLinkValue
    }
}

export default connect(mapStateToProps, { 
    fetchFloor, 
    editingDisabled,
    audioLinkOnChange,
    audioLinkUpdating 
})(Floor);