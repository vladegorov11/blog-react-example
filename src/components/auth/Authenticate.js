import React, {Component} from 'react'
import {connect} from 'react-redux'

export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated){
        this.props.history.push('/signin/')
      }
    }
    render() {
      return (
        <ComposedComponent {...this.props}/>
      )
    }
  }

  const mapStateToProps = (state) =>  {
    return {
      isAuthenticated: state.user.user
    }
  }

  return connect(mapStateToProps)(Authenticate);
}
