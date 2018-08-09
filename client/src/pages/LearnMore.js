import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    // fetchArtistConnectByFloorAndPreLoadState,
    fetchArtistConnectByFloor,
    // editingArtistConnectInputFieldOnChange
} from '../actions';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import requireAuth from '../components/requireAuth';

class LearnMore extends Component {

    componentWillMount() {
        // console.log(this.props);
        this.props.fetchArtistConnectByFloor(this.props.match.params.floor);
        // this.props.fetchArtistConnectByFloorAndPreLoadState(this.props.match.params.floor);
    }

    // handleInputs = (event) => {
    //     const text = event.target.value;
    //     const name = event.target.name;

    //     this.props.editingArtistConnectInputFieldOnChange(name, text);
    // }

    render() {
        if(!this.props.artistConnect) {
            return <h2>Loading</h2>
        } else {
            // console.log('checking', this.props.artistConnect)
            return (
                <div className="wrapper">
                    <Header/>
                    <section className="exhibitions">
                        <h1 className="exhibitions__title">Connect with Artist</h1>
                        <div className="articlePictureBox">
                            <img className="articlePicture" src={this.props.artistConnect.picture}/>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Article Title: {this.props.artistConnect.articleTitle}</h4>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Article Description: {this.props.artistConnect.articleDescription}</h4>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Article Link: {this.props.artistConnect.articleLink}</h4>
                        </div>
                        <div className="articleInputBox">
                            <h4 className='heading__4'>Social Link: {this.props.artistConnect.socialLink}</h4>
                        </div>
                        <Link 
                            to={'/exhibitionFloor' + this.props.match.params.floor + '/learnMore/' + this.props.artistConnect._id} 
                            className="audioLinkBtn">Edit
                        </Link>
                    </section>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.artistConnect.fetching,
        fetched: state.artistConnect.fetched,
        error: state.artistConnect.error,
        artistConnect: state.artistConnect.artistConnect[0]
    }
}

export default requireAuth(connect(mapStateToProps, { 
    fetchArtistConnectByFloor
})(LearnMore));