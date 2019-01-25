import React from 'react';
import { Link } from 'react-router-dom'
import SignOutLinks from './SignOutLinks'
import SignInLinks from './SignInLinks'

const Navbar = (props) => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>Blog</Link>
        {props.user ? <SignInLinks/> : <SignOutLinks/>}
      </div>
    </nav>
  )
}

export default Navbar;
