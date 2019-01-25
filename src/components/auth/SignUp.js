import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state, this.props.history)
  }
  render() {
    console.log(this.state);
    return (
       <div className="container">
          <form className='white' onSubmit={this.handleSubmit}>
            <h5 className='grey-text text-darken-3 center'>Sign up </h5>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <label htmlFor='first_name'>First name</label>
              <input type='text' id='first_name' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <label htmlFor='last_name'>Last name</label>
              <input type='text' id='last_name' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <button className='btn lighten-1 z-depth-0'>Registration</button>
            </div>
          </form>
       </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (new_user, history) => dispatch(signUp(new_user, history))
  }
}
export default connect(null, mapDispatchToProps)(SignUp);
