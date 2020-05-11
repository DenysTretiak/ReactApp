import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import SideMenu from './SideMenu'
import Main from './Main'

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
        // console.log(result);
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
      <div className="App">
        <div className="SideContent">
          <SideMenu 
            avatarUrl={this.state.avatarUrl}
            name={this.state.name}  />
        </div>
        <div className="MainContent">
            <Header 
              followers = {this.state.followers}
              publicRepos = {this.state.publicRepos}   />
            <Main/>
        </div>
      </div>
    );
  }
}

export default App;
