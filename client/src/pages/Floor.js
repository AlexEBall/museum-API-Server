import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFloor} from '../actions';
import API from "../utils/API";
import Header from '../components/Header';
// import {Link} from 'react-router-dom';

class Floor extends Component {
    componentWillMount = () => {
        const floor = parseInt(this.props.match.params.floor);
        this.props.fetchFloor(floor);
    }

    renderFloorInformation = () => {
        
    }

    render() {
        console.log('is this working?', this.props);
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
                </section>
                <footer className="footer">
                </footer>
            </div>
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