import React, { Component } from "react";
import './ReposList.css'

class ReposList extends Component {
    columns = ['Owner', 'Name', 'Description', 'Forks', 'Private']
    constructor(props) {
        super(props)
        this.state = {};
      }
    
    componentDidMount() {
        fetch(`https://api.github.com/users/DenysTretiak/repos`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                this.setState({data: result});
            })
    }

    render() {
        console.log(this.state)
        return (
            <div className="ReposList">
                <div className="ReposListHeader">
                    <div> <b>Repositories</b> <br/> Overview of Github repos </div>
                    <input type="text" />
                </div>
                <div className="ReposListMain">
                        {
                            this.state.data > 0 && this.state.map((column) => (
                                <div>
                                    <div className="ReposListColumn">
                                        <div>Owner</div> 
                                        <div>column</div>
                                    </div>  
                                    <div className="ReposListColumns">
                                        <div>Name</div> 
                                        <div>{this.props.followers}</div>
                                    </div>
                                    <div className="ReposListColumn">
                                        <div>Description</div> 
                                        <div>{this.props.publicRepos}</div>
                                    </div>
                                    <div className="ReposListColumn">
                                        <div>Forks</div> 
                                        <div>{this.props.publicRepos}</div>
                                    </div>
                                    <div className="ReposListColumn">
                                        <div>Private</div> 
                                        <div>{this.props.publicRepos}</div>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        )
    }
}

export default ReposList;