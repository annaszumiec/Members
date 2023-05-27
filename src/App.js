import React, { Component } from "react";
import Members from './Members';
import AddMember from './Addmember'

import './App.css';


class App extends Component {
  state = {
    members: [
      { name: "Anna", age: "37", level: "master", id: "1" },
      { name: "Maria", age: "30", level: "advance", id: "2" },
      { name: "Miranda", age: "18", level: "junior", id: "3" },
    ]
  }

  addMember = (member) => {
    member.id = Math.random();
    let members = [...this.state.members, member];
    this.setState({
      members: members
    });
  }

  deleteMember = (id) => {
    let members = this.state.members.filter(member => {
      return member.id !== id
    });
    this.setState({
      members: members
    });

  }

  render() {
    return (
      <div className="App">
        <h1> Members Add and Delate </h1>
        <p>Welcome</p>
        <Members members={this.state.members} deleteMember={this.deleteMember} />
        <AddMember addMember={this.addMember} />
      </div>
    );
  }
}

export default App;
