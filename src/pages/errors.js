import React from 'react'
import {Link} from 'react-router-dom'
export const NotFound = () => {
  return (
    <div className="container center error-container">
      <h1><b>404</b></h1>
      <h3>Page Not Found</h3>
      <Link to='/'>Back to home page </Link>
    </div>
  )
}
