import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchArtistConnectByFloorAndPreLoadState,
    fetchArtistConnectByFloor,
    editingArtistConnectInputFieldOnChange
} from '../actions';
import Header from '../components/Header';

class LearnMore extends Component {

    componentWillMount() {
        console.log(this.props);
        this.props.fetchArtistConnectByFloor(this.props.match.params.floor);
        this.props.fetchArtistConnectByFloorAndPreLoadState(this.props.match.params.floor);
    }

    handleInputs = (event) => {
        const text = event.target.value;
        const name = event.target.name;

        this.props.editingArtistConnectInputFieldOnChange(name, text);
    }

    render() {
        // console.log('number 2', this.props);

        if (!this.props.artistConnect) {
            return <h2>Loading</h2>
        } else {
            return (
                <div className="wrapper">
                        <Header/>
                        <section className="exhibitions">
                            <h1 className="exhibitions__title">Edit the Connect with Artist Page</h1>
                            <div className="formCard">
                            <form 
                                className="formCard__form"
                                onSubmit={this.handleFormSubmit}>
                                <div className="formCard__formGroup">
                                    <label className="label">Article Title:</label>
                                    <input
                                        className="formCard__formInput"
                                        value={this.props.artistConnect.articleTitle}
                                        name='article title'
                                        onChange={this.handleInputs}
                                    />
                                </div>
                                <div className="formCard__formGroup">
                                    <label className="label">Picture:</label>
                                    <input
                                        className="formCard__formInput"
                                        value={this.props.artistConnect.picture}
                                        name='article picture'
                                        onChange={this.handleInputs}
                                    />
                                </div>
                                <div className="formCard__formGroup">
                                    <label className="label">Article Description:</label>
                                    <textarea
                                        className="formCard__formInput"
                                        value={this.props.artistConnect.articleDescription}
                                        name='article description'
                                        onChange={this.handleInputs}
                                    />
                                </div>
                                <div className="formCard__formGroup">
                                    <label className="label">Article Link:</label>
                                    <input
                                        className="formCard__formInput"
                                        value={this.props.artistConnect.articleLink}
                                        name='article link'
                                        onChange={this.handleInputs}
                                    />
                                </div>
                                <div className="formCard__formGroup">
                                    <label className="label">Social Link:</label>
                                    <input
                                        className="formCard__formInput"
                                        value={this.props.artistConnect.socialLink}
                                        name='social link'
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
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.artistConnect.fetching,
        fetched: state.artistConnect.fetched,
        error: state.artistConnect.error,
        artistConnect: state.artistConnect.artistConnect[0],
        articleTitle: state.editingArtistConnect.articleTitle,
        picture: state.editingArtistConnect.picture,
        articleDescription: state.editingArtistConnect.articleDescription,
        articleLink: state.editingArtistConnect.articleLink,
        socialLink: state.editingArtistConnect.socialLink,
        floor: state.editingArtistConnect.floor,
    }
}

export default connect(mapStateToProps, { 
    fetchArtistConnectByFloorAndPreLoadState,
    fetchArtistConnectByFloor,
    editingArtistConnectInputFieldOnChange
})(LearnMore);