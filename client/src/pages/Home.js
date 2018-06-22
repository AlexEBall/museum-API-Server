import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExhibitions} from '../actions';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

class Home extends Component {

    componentWillMount = () => {
        this.props.fetchExhibitions();
    }

    render() {
        let exhibitions = this.props.exhibitions;
        console.log(exhibitions)
        if (!exhibitions) {
            return <h2>Loading</h2>
        } else {
        return(
            <div className="wrapper">
                <Header />
                <section className="content">
                    <h1 className="content__title">What would you like to do?</h1>
                    <div className="content__choices">
                        <Link to="/exhibitions">
                            <button className="content__btn">
                                Edit Exhibitions
                            </button>
                        </Link>
                        <Link to="/programs">
                            <button className="content__btn">
                                Edit Programs
                            </button>
                        </Link>
                    </div>
                </section>
                <footer className="footer">
                </footer>
            </div>
        );
        }
    }
};

const mapStateToProps = state => {
    return { 
        fetching: state.exhibitions.fetching,
        fetched: state.exhibitions.fetched, 
        error: state.exhibitions.error, 
        exhibitions: state.exhibitions.exhibitions
    }
}

export default connect(mapStateToProps, {fetchExhibitions})(Home);