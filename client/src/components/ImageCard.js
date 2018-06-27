import React, {Component} from 'react';
import {connect} from 'react-redux';
import {imgEditingDisabled, imgLinkOnChange} from '../actions';

class ImageCard extends Component {
    state = {
        editDisabled: false
    };

    toggleImgInputFields = () => {
        console.log('clicked 2');

        this.setState({editDisabled: true})
    }

    handleImgLinkUpdate = event => {
        const value = event.target.value;
        this.props.imgLinkOnChange(value)
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
                        onClick={this.submitAudioLinkUpdate}
                        >Submit
                    </button>
                </div>
            )
        } else {
            return (        
                <div className="exhibitions__imageCard">
                    <img src={this.props.img} className="exhibitions__imgs"/>
                    <button 
                        className="exhibitions__btn"
                        onClick={this.toggleImgInputFields}>Edit</button>
                </div>  
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        imgLinkValue: state.input.imgLinkValue,
        imgEditDisabled: state.input.imgEditDisabled
    }
}

export default connect(mapStateToProps, {imgEditingDisabled, imgLinkOnChange})(ImageCard);