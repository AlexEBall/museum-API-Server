import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProgramCard extends Component {

    editProgram = () => {
        // console.log('hi');

    }

    deleteProgram = () => {

    }

    render () {
        console.log('these are my props', this.props);
        return(
            <div className="programCard">
                <div className="programCard programCard__Title">
                    {this.props.program.title}
                </div>
                <div className="programCard programCard__Img">
                    <img className="programCard__Img--picture" src={this.props.program.picture} alt="program picture" />
                </div>
                <div className="programCard programCard__Price">
                    Price: {this.props.program.price}
                </div>
                <div className="programCard programCard__Description">
                    Description: {this.props.program.description}
                </div>
                <div className="programCard programCard__Time">
                    Time: {this.props.program.time}
                </div>
                <div className="programCard programCard__MemberInfo">
                    Member Information: {this.props.program.memberInfo}
                </div>
                <div className="programCard programCard__RegistrationLink">
                    Registration Link: {this.props.program.registrationLink}
                </div>
                <div className="programCard programCard__Buttons">
                    <Link to="/programs/toAdd">
                        <button className="exhibitions__btn">
                            Add a Program
                        </button>
                    </Link>
                    <button 
                        className="exhibitions__btn"
                        onClick={this.editProgram}>Edit a Program
                    </button>
                    <button 
                        className="exhibitions__btn"
                        onClick={this.deleteProgram}>Delete a Program
                    </button>
                </div>
            </div>
        )
    }
}