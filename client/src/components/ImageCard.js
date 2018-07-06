import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    imgEditingDisabled, 
    imgLinkOnChange, 
    // imgLinkUpdating, 
    fetchFloor,
    linkUpdating
} from '../actions';

class ImageCard extends Component {
    state = {
        editDisabled: false
    };

    toggleImgInputFields = () => {
        console.log('clicked 2');
        this.setState({editDisabled: true})
    }

    handleImgLinkUpdate = event => {
        const link = event.target.value;
        this.props.imgLinkOnChange(link)
    }

    removeImg = () => {
        
    }

    submitImgLinkUpdate = event => {
        event.preventDefault();
        
        this.props.linkUpdating(null, this.props.imgLinkValue, this.props.position, this.props.floorNum);

        if (this.props.imgLinkValue !== this.props.img) {
            this.props.fetchFloor(this.props.floorNum);
        }

        this.setState({editDisabled: false});
    }

    render() {
        console.log('heeeyyyy, props::', this.props);
        if (this.state.editDisabled) {
            return (
                <div className="exhibitions__imageCard">
                    <img src={this.props.img} className="exhibitions__imgs"/>
                    <input 
                        value={this.props.imgLinkValue}
                        onChange={this.handleImgLinkUpdate}
                        name="imgLinkValue"
                        placeholder="Copy an AWS Link"
                    />
                    <button 
                        className="exhibitions__btn" 
                        onClick={this.submitImgLinkUpdate}
                        >Submit
                    </button>
                </div>
            )
        } else {
            return (        
                <div className="exhibitions__imageCard">
                    <img src={this.props.img} className="exhibitions__imgs"/>
                    <div className="exhibitions__imageCardButtonsArea">
                        <button 
                            className="exhibitions__btn"
                            onClick={this.toggleImgInputFields}>Edit</button>
                        <button 
                            className="exhibitions__btn"
                            onClick={this.removeImg}>Delete Img</button>
                    </div>
                </div>  
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.floor.fetching,
        fetched: state.floor.fetched,
        error: state.floor.error,
        floor: state.floor.floor,
        imgLinkValue: state.input.imgLinkValue,
        imgEditDisabled: state.input.imgEditDisabled
    }
}

export default connect(mapStateToProps, {
    imgEditingDisabled, 
    imgLinkOnChange, 
    // imgLinkUpdating,
    fetchFloor,
    linkUpdating
})(ImageCard);