import React, {Component} from 'react';

export default class ProgramCard extends Component {
    render () {
        console.log('these are my props', this.props);
        return(
            <div className="programCard">
                <div className="programCard__Title">
                    Hey
                </div>
                <div className="programCard__Img">
                    You
                </div>
                <div className="programCard__Price">
                </div>
                <div className="programCard__Description">
                </div>
                <div className="programCard__Time">
                </div>
                <div className="programCard__MemberInfo">
                </div>
                <div className="programCard__RegistrationLink">
                </div>
            </div>
        )
    }
}