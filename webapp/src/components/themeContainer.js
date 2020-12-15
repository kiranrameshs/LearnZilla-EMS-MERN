import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
import './Authentication.scss';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/user.action';
import { removeError } from '../../store/actions/error.action';

class ThemeContainer extends Component {

 

  render(){
    return(
      
      <>
     
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
            {/* <span className="glyphicon glyphicon-education"></span> */}
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>You are 30 seconds away from learning!</p>
            </div>
            <div className="col-md-9 register-right">

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                  <h3 className="register-heading">Login</h3>
                 


                </div>

              </div>
            </div>
          </div>
        </div>

  </>
    


  )
  }
}

//export default Login;
const reduxProps = state => {
  return ({
    auth: state.user.authUser,
    errorMesage: state.errors.message
  })
};


export default connect(reduxProps, { loginUser, removeError })(ThemeContainer);
