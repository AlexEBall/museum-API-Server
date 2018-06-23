import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFloor} from '../actions';
import API from "../utils/API";
// import {Link} from 'react-router-dom';

class Floor extends Component {
    componentWillMount() {
        // API.getExhibitionFloor(this.props.match.params.floor)
        // .then(res => {
        //     console.log('the response', re)
        //     this.props.fetchFloor({ floor: res.data[0].floors[0] })
        // })
        // .catch(err => console.log(err));
        const floor = parseInt(this.props.match.params.floor);
        this.props.fetchFloor(floor);
    }

    render() {
        console.log('is this working?', this.props);
        return (
            <h1>Jumpy</h1>
        );
    }
};

const mapStateToProps = state => {
    return {
        fetching: state.floor.fetching,
        fetched: state.floor.fetched,
        error: state.floor.error,
        floor: state.floor.floor
    }
}

export default connect(mapStateToProps, { fetchFloor })(Floor);