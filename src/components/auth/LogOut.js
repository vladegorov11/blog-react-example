import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

class LogOut extends Component {
  handleClick = (e) => {
    this.props.signOut()
  }
  render() {
    return(
      <NavLink to='/' onClick={this.handleClick}>Log out</NavLink>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(LogOut);
