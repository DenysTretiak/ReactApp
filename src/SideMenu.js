import React, {Component} from 'react';
import UserInfo from './UserInfo';
import './SideMenu.css'

class SideMenu extends Component {
    render() {
      return (
        <div className="SideMenu">
          <UserInfo 
            avatarUrl={this.props.avatarUrl}
            name={this.props.name}/>
           <div className="Navigation">
               <ul>
                   <li className="ListItem"><a>Repositories</a></li>
                   <li className="ListItem"><a>Followers</a></li>
                   <li className="ListItem"><a>Subscriptions</a></li>
                   <li className="ListItem"><a>About</a></li>
               </ul>
            </div> 
        </div>
      )
    }
}

export default SideMenu;