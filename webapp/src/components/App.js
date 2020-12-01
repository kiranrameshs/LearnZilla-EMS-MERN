import "./App.css";
import React, { Component } from "react";
import Dashboard from "./Dashboard";

// My app component
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      student:{
        id:'123',
        usernmae:'user'
      }
    }
  }

  render() {
    const studentID = this.state.student.id;
    return (
      <>
        <Dashboard studentID = {studentID}/>
      </>
    );
  }
}

export default App;
