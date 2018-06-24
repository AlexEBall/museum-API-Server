import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFloor, editDisabled} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import {Link} from 'react-router-dom';

class Floor extends Component {
    componentWillMount = () => {
        const floor = parseInt(this.props.match.params.floor);
        this.props.fetchFloor(floor);
    }

    toggleInputFields = () => {
        console.log('clicked');
        this.props.editDisabled(true);
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
                        <div className="exhibitions__inputBox">
                            <h3 className="heading__3">Audio Link</h3>
                            <h3 className="heading__3">{floorInformation.audioLink}</h3>
                            <button 
                                className="exhibitions__btn" 
                                onClick={this.toggleInputFields}
                                >Edit</button>
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
        editDisabled: state.input.editDisabled
    }
}

export default connect(mapStateToProps, { fetchFloor, editDisabled })(Floor);