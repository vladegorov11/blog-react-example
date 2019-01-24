import React from 'react';
import { NavLink } from 'react-router-dom'
import Notifications from '../notifications/Notifications.js'
const SignInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/articles/new/'>Create article</NavLink></li>
      <li><NavLink to='/'>Log out</NavLink></li>
      <li><Notifications/></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
  )
}

export default SignInLinks;
