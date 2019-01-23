import React from 'react';
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/signup'>Sign up</NavLink></li>
      <li><NavLink to='/signin'>Sing in</NavLink></li>
    </ul>
  )
}

export default SignOutLinks;
