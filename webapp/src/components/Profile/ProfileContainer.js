import React, { Component } from 'react';
import NavBar from '../NavBar';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';

import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/user.action';
import { logoutUser } from '../../store/actions/user.action';

import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
import Sidebar from '../SideBar/SideBar';

const userreduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

class Profile extends Component {

  // componentDidMount(){
  //   let userState = JSON.parse(localStorage.getItem("user"));
  //   let id = userState.user._id;
  // }

    render() {
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
                    <h5>
                      Kshiti Ghelani
                                    </h5>
                    <h6>
                      Web Developer and Designer
                                    </h6>
                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                    <ul className="nav nav-tabs ">
                      <li className="active"><a href="#home" data-toggle="tab">Profile</a></li>
                      <li><a href="#profile" data-toggle="tab">Password</a></li>
                    </ul>
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div id="myTabContent" className="tab-content">

                      <UpdateProfile />
                      <UpdatePassword />

                    </div>
                   
                    {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul> */}
                  </div>
                </div>
              </div>



            </div>
            </>
        );
    }
}


//export default Profile;
// const reduxProps = state => {
// 	return ({
//    // profile: state.user.authUser,
//     auth: state.user.authUser
// 	})
//   };
  
  
export default connect(userreduxProps, { registerUser,logoutUser })(Profile);