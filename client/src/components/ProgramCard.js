import React, {Component} from 'react';

export default class ProgramCard extends Component {
    render () {
        console.log('these are my props', this.props);
        return(
            <div className="programCard">
                <div className="programCard__Title">
                    {this.props.program.title}
                </div>
                <div className="programCard__Img">
                    <img className="programCard__Img--picture" src={this.props.program.picture} alt="program picture" />
                </div>
                <div className="programCard__Price">
                    {this.props.program.price}
                </div>
                <div className="programCard__Description">
                    {this.props.program.description}
                </div>
                <div className="programCard__Time">
                    {this.props.program.time}
                </div>
                <div className="programCard__MemberInfo">
                    {this.props.program.memberInfo}
                </div>
                <div className="programCard__RegistrationLink">
                    {this.props.program.registrationLink}
                </div>
            </div>
        )
    }
}