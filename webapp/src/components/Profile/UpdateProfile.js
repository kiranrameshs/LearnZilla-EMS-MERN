import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/user.action';


class Profile extends Component {

	constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
      }


    submitForm(e){
		e.preventDefault();
		let name = document.getElementById('username').value;
		let email = document.getElementById('email').value;
		let address = document.getElementById('address').value;
		let data = {};
		data.name = name;
		data.email = email;
		data.address = address;
		let id = JSON.parse(localStorage.getItem("user")).id;
		this.props.updateUser(id, data);
        
    }

    render() {
		let p = JSON.parse(localStorage.getItem("user"));
        return(
            <>
		<div className="tab-pane active in" id="home">
			<form id="tab" onSubmit={this.submitForm} >
				<label>Username</label> <br />
				<input id="username" type="text" placeholder={p.name} className="input-xlarge" /> <br />
				<label>Email</label><br />
				<input id="email" type="text" placeholder={p.email} className="input-xlarge" /> <br />
				<label>Address</label><br />
				<textarea id="address" type="text" placeholder={p.address} rows="7" className="input-xlarge"></textarea> <br />
				<label>University: </label>
				<label className="input-xlarge">  {p.university}</label> 
				<br />
				<br />
				<div>
					<button className="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
            
            </>
            


        );
      
    }
}


//export default Profile;
const reduxProps = state => {
	return ({
	  
	})
  };
  
  
export default connect(reduxProps, { updateUser })(Profile);