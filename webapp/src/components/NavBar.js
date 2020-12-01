import React, { Component } from 'react';


class NavBar extends Component {

    constructor(props){
        super();
        this.state={
          title:"new",
          description: "adding new item"
        }
    }

    componentDidMount() {
      fetch('/todos/', { method: 'GET' })
      .then(res => res.json())
      .then(json => {
       console.log(json);
        
      });
      }


      render() {
        return (
          <>
            <p>NavBar</p>
            <button>demo</button>
          </>
        );
      }

}

export default NavBar;