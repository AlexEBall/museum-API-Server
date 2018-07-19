import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArtistConnectByFloor} from '../actions';

class LearnMore extends Component {

    componentWillMount() {
        console.log(this.props);
        this.props.fetchArtistConnectByFloor(this.props.match.params.floor);
    }

    render() {
        console.log('number 2', this.props);
        return <h1>Hello</h1>
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.artistConnect.fetching,
        fetched: state.artistConnect.fetched,
        error: state.artistConnect.error,
        artistConnect: state.artistConnect.artistConnectByFloor
    }
}

export default connect(mapStateToProps, { fetchArtistConnectByFloor })(LearnMore);