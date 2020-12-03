import React, { Component } from 'react';
import profile from '../assets/profile.png'

class NavBar extends Component {

    constructor(props){
        super();
        this.state=props;
    }

    componentDidMount() {
      // fetch('/todos/', { method: 'GET' })
      // .then(res => res.json())
      // .then(json => {
      //  console.log(json);
        
      // });
      }

      render() {
        return (
          <>
            <div>
              <ul className="navBar">
                <li><a href="#">HOME</a></li>
                <li><a>COURSES</a></li>
                <li><a>ACCOUNT</a></li>
                <li>
                  <a href="#">LOGOUT</a>
                </li>
              </ul>
            </div>
          </>
        );
      }

}

export default NavBar;