import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarUrl: null,
      name: null
    }
  }

  //UseEffect change
  componentDidMount() {
    fetch(`https://api.github.com/users/DenysTretiak`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          avatarUrl: result.avatar_url,
          name: result.name,
          followers: result.followers,
          publicRepos: result.public_repos
        })
      })
  }

  render() {
    return (
      <div className="App" style= {{ display: 'flex'}}>
        <div className="side-content" style={{ width: '30%' }}>
          <SideMenu 
            avatarUrl={this.state.avatarUrl}
            name={this.state.name}  />
        </div>
        <div className="main-content" style={{ width: '70%' }}>
            <Header 
              followers = {this.state.followers}
              publicRepos = {this.state.publicRepos}   />
        </div>
      </div>
    );
  }
}

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
        <img src={this.props.avatarUrl} style = {{width: '100px', height: '100px'}} alt="Profile avatar"/>
        <div> {this.props.name} </div>
      </div>  
    )
  }
}

class SideMenu extends Component {
  render() {
    return (
      <div className="SideMenu">
        <UserInfo 
          avatarUrl={this.props.avatarUrl}
          name={this.props.name}/>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Header" style = {{ display: 'flex'}}>
        <img src="https://goo.su/10wA" alt="GitCat logo" style = {{ width: '200px', height: '200px'}}/>
        <div className="header-info"> 
          <div>Followers: {this.props.followers}</div>
          <div>Public repos: {this.props.publicRepos}</div>
        </div>
      </div>
    )
  }
}

export default App;
