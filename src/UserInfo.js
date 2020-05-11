import React, {Component} from 'react'
import './UserInfo.css'

class UserInfo extends Component {
    render() {
      return (
        <div className="UserInfo">
          <img className="UserAvatar" src={this.props.avatarUrl} alt="Profile avatar"/>
          <div> {this.props.name} </div>
        </div>  
      )
    }
}

export default UserInfo;