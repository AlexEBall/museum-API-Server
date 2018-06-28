import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchFloor, 
    imgEditingDisabled,
    editingDisabled, 
    audioLinkOnChange, 
    audioLinkUpdating
} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';
// import {Link} from 'react-router-dom';

class Floor extends Component {
    componentWillMount = () => {
        const floor = parseInt(this.props.match.params.floor);
        this.props.fetchFloor(floor);
    }

    componentWillUnmount = () => {
        this.props.editingDisabled(false);
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
        event.preventDefault();
        const floor = parseInt(this.props.match.params.floor);

        this.props.audioLinkUpdating(this.props.audioLinkValue, floor);

        if (this.props.audioLinkValue !== this.props.floor.audioLink) {
            this.props.fetchFloor(floor);
        }
        this.props.editingDisabled(false);        
    }

    renderAudioLinkEditingField = () => {
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

    renderImgGallery = () => {
        const floor = parseInt(this.props.match.params.floor);
        const floorInfoArray = this.props.floor.floorGallery;
        console.log(floorInfoArray);
        if (!floorInfoArray) {
            return <h2>Loading</h2>
        } else {
        return (
            <div className="exhibitions__imageCardArea">
                {floorInfoArray.map((img, i) => { 
                    return (
                        <ImageCard 
                            key={i} 
                            img={img}
                            position={i} 
                            floor={floor}
                        /> 
                    )}
                )}
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
                        {this.renderAudioLinkEditingField()}
                        <div className="exhibitions__galleryArrayImageHolder">
                            <div className="exhibitions__imageTitleArea">
                                <h3 className="heading__3">Image Gallery</h3>
                                <button className="btn">Add an Image</button>
                            </div>
                            {this.renderImgGallery()}
                        </div>
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
        audioLinkValue: state.input.audioLinkValue,
        imgLinkValue: state.input.imgLinkValue,
        imgEditDisabled: state.input.imgEditDisabled
    }
}

export default connect(mapStateToProps, { 
    fetchFloor, 
    imgEditingDisabled,
    editingDisabled,
    audioLinkOnChange,
    audioLinkUpdating 
})(Floor);