import React, { Component } from "react";
import axios from 'axios';
class Register extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
      email:'',
      password: '',
      password2: '',
      errors: {}

    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser ={
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2

    };
    axios
    .post('http://localhost:5555/api/users/register', newUser)
    .then(res =>console.log(res.data) )
    .catch(err => console.log(err.response.data)); 
  }
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector Account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input 
                  type= 'text' 
                  className="form-control form-control-lg" placeholder="Name" 
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  required/>
                </div>
                <div className="form-group">
                  <input 
                  type= 'email' 
                  className="form-control form-control-lg" 
                  placeholder="Email Address" 
                  name="email" 
                  value={this.state.email}
                  onChange={this.onChange}
                  required/>
                  <small className="form-text text-muted">This Site uses Gravatar, so if you want a profile image, use a Gravatar email </small>
                </div>
                <div className="form-group">
                  <input 
                  type= 'password' 
                  className="form-control form-control-lg" placeholder="Password" 
                  name="password" 
                  value={this.state.password}
                  onChange={this.onChange}
                  required/>
                  </div>
                  <div className="form-group">
                  <input 
                  type= 'password' 
                  className="form-control form-control-lg" placeholder="Confirm Password" 
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChange}
                  required/>
                  </div>
                  <input type ='submit' className="btn btn-info btn-block mt-4"/>
                  </form>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Register;
