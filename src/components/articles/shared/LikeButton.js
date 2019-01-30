import React, { Component } from 'react'

export default class LikeButton extends Component {
  state = {
    like: false
  }

  like = (event) => {
    event.preventDefault();
    this.setState({like : !this.state.like})
  }

  render() {
    if (this.props.user){
      return (
        <a href="#" onClick={this.like}>
          <i className="material-icons">
            {this.state.like ? 'favorite' : 'favorite_border'}
          </i>
        </a>
      )
    } else {
      return null
    }
  }
}
