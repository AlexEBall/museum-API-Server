import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchArtistConnectByFloorAndPreLoadState,
    editArtistConnect,
    editingArtistConnectInputFieldOnChange
} from '../actions';
import Header from '../components/Header';
import requireAuth from '../components/requireAuth';

class LearnMoreEdit extends Component {

    componentDidMount() {
        this.props.fetchArtistConnectByFloorAndPreLoadState(this.props.match.params.floor);
    }

    handleInputs = (event) => {
        const text = event.target.value;
        const name = event.target.name;

        this.props.editingArtistConnectInputFieldOnChange(name, text);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const data = {
            articleTitle: this.props.articleTitle,
            picture: this.props.picture,
            articleDescription: this.props.articleDescription,
            articleLink: this.props.articleLink,
            socialLink: this.props.socialLink,
            floor: parseFloat(this.props.match.params.floor)
        }

        this.props.editArtistConnect(data, this.props.match.params.id);

        this.props.history.go(-1);
    }

    render() {
        if (!this.props.articleTitle) {
            return <h2>Loading</h2>
        } else {
            return (
                <div className="wrapper">
                    <Header/>
                    <section className="exhibitions">
                        <h1 className="exhibitions__title">Edit Connect with Artist</h1>
                        <div className="formCard">
                        <form 
                            className="formCard__form"
                            onSubmit={this.handleFormSubmit}>
                            <div className="formCard__formGroup">
                                <label className="label">Article Title:</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.articleTitle}
                                    name='article title'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Picture:</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.articleDescription}
                                    name='article picture'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Article Description:</label>
                                <textarea
                                    className="formCard__formInput"
                                    value={this.props.articleDescription}
                                    name='article description'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Article Link:</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.articleLink}
                                    name='article link'
                                    onChange={this.handleInputs}
                                />
                            </div>
                            <div className="formCard__formGroup">
                                <label className="label">Social Link:</label>
                                <input
                                    className="formCard__formInput"
                                    value={this.props.socialLink}
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
        articleTitle: state.editingArtistConnect.articleTitle,
        picture: state.editingArtistConnect.picture,
        articleDescription: state.editingArtistConnect.articleDescription,
        articleLink: state.editingArtistConnect.articleLink,
        socialLink: state.editingArtistConnect.socialLink,
        floor: state.editingArtistConnect.floor
    }
}

export default requireAuth(connect(mapStateToProps, {
    fetchArtistConnectByFloorAndPreLoadState,
    editArtistConnect,
    editingArtistConnectInputFieldOnChange
})(LearnMoreEdit));