import React, { Component } from 'react';
import NavBar from '../NavBar';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';

import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/user.action';
import { logoutUser } from '../../store/actions/user.action';

import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
import Sidebar from '../SideBar/SideBar';

//fetch user details
const userreduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

class Profile extends Component {
   // render forms for updatinf user details
    render() {
      let p = JSON.parse(localStorage.getItem("user"));
        return(
            <>
            <NavBar />
            <Navbar className="sidebar">
              <Navbar.Collapse>
                <Sidebar />
              </Navbar.Collapse>
            </Navbar>
            <br />
            <div className="profile allChildren">

              <div class="row">
                <div class="col-md-4">
                  <div class="profile-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="profile-head">
                    <h5>{p.name}</h5>
                    <h6>{p.university}</h6>
                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                    <ul className="nav nav-tabs ">
                      <li className="active"><a href="#home" data-toggle="tab">Profile</a></li>
                      <li><a href="#profile" data-toggle="tab">Password</a></li>
                    </ul>
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <label href="">Website Link</label><br/>
                            <label href="">Bootsnipp Profile</label><br/>
                            <label href="">Bootply Profile</label>
                            <p>SKILLS</p>
                            <label href="">Web Designer</label><br/>
                            <label href="">Web Developer</label><br/>
                            <label href="">WordPress</label><br/>
                            <label href="">WooCommerce</label><br/>
                            <label href="">PHP, .Net</label><br/>
                        </div>
                    </div>
                    <div className="tab-content">

                      <UpdateProfile />
                      <UpdatePassword />

                    </div>
                  </div>
                </div>
              </div>



            </div>
            </>
        );
    }
}

  
export default connect(userreduxProps, { registerUser,logoutUser })(Profile);