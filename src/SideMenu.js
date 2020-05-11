import React, {Component} from 'react';
import UserInfo from './UserInfo';
import './SideMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faUsers, faUser, faLink } from '@fortawesome/free-solid-svg-icons'

class SideMenu extends Component {
    render() {
      return (
        <div className="SideMenu">
          <UserInfo 
            avatarUrl={this.props.avatarUrl}
            name={this.props.name}/>
           <div className="Navigation">
               <ul>
                   <li className="ListItem"><a> <FontAwesomeIcon icon={faCodeBranch} /> Repositories</a></li>
                   <li className="ListItem"><a> <FontAwesomeIcon icon={faUsers} /> Followers</a></li>
                   <li className="ListItem"><a> <FontAwesomeIcon icon={faLink} /> Subscriptions</a></li>
                   <li className="ListItem"><a> <FontAwesomeIcon icon={faUser} /> About</a></li>
               </ul>
            </div> 
        </div>
      )
    }
}

export default SideMenu;