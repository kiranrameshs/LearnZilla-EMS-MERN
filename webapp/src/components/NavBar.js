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
            <p>Hi</p>
            <button onClick={this.newCounter}>demo</button
            <div>
              <ul className="navBar">
                <li><a href="#">HOME</a></li>
                <li><a >COURSES</a></li>
                <li><a >ACCOUNT</a></li>
                <li><a href="#">LOGOUT</a></li>
              </ul>
            </div>
          </>
        );
      }

}

export default NavBar;
