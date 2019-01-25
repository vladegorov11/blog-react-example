import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state, this.props.history)
  }
  render() {
    return (
       <div className="container">
          <form className='white' onSubmit={this.handleSubmit}>
            <h5 className='grey-text text-darken-3 center'>Sign in </h5>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <button className='btn lighten-1 z-depth-0'>Login</button>
            </div>
          </form>
       </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (new_user, history) => dispatch(signIn(new_user, history))
  }
}
export default connect(null, mapDispatchToProps)(SignIn);
