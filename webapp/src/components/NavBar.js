import React, { Component } from 'react';
import profile from '../assets/profile.png'
import { Navbar,Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {

    constructor(props){
        super();
        this.state=props;
    }

    componentDidMount() {
     
    }

      render(props) {
        let fname = "Ron";//this.props.fname;
        return (
          <>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#"> <span class="glyphicon glyphicon-education"></span> LearnZilla</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                  <li><a>Courses</a></li>
                  <li><a>Grade</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> My profile</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> LOGOUT</a></li>
                </ul>
              </div>
            </nav>


          </>
        );
      }

}

export default NavBar;