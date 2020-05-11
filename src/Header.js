import React, { Component } from 'react';
import './Header.css'
import logo from './images/logo.jpg';

class Header extends Component {
    render() {
      return (
        <div className="Header" style = {{ display: 'flex'}}>
          <img src={logo} alt="GitCat logo" style = {{ width: '200px'}}/>
          <div className="HeaderInfoList">
            <div className="HeaderInfoListItem">
                <div>Received events:</div> 
                <div>50</div>
            </div>  
            <div className="HeaderInfoListItem">
                <div>Followers:</div> 
                <div>{this.props.followers}</div>
            </div>
            <div className="HeaderInfoListItem">
                <div>Public repos:</div> 
                <div>{this.props.publicRepos}</div>
            </div>
          </div>
        </div>
      )
    }
}

 export default Header; 