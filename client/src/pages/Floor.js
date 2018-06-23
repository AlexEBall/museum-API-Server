import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFloor} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import {Link} from 'react-router-dom';

class Floor extends Component {
    componentWillMount = () => {
        const floor = parseInt(this.props.match.params.floor);
        this.props.fetchFloor(floor);
    }

    renderFloorInformation = () => {
        const floorInformation = this.props.floor.floor;
        if (!floorInformation) {
            return(
                <div className="exhibitions__content-box">
                    <div className="exhibitions__individual-container">
                        <h2></h2>
                    </div>
                </div>
            )
        } else {
        <div className="exhibitions__content-box">
            <div className="exhibitions__individual-container">
                <h2></h2>
            </div>
        </div>
        }
    }

    render() {
        console.log('is this working?', this.props);
        return (
            <div className="wrapper">
                <Header />
                <section className="exhibitions">
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
        floor: state.floor.floor
    }
}

export default connect(mapStateToProps, { fetchFloor })(Floor);