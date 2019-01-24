import React from 'react'

class Notifications extends React.Component {
  state ={
    isOpen: false
  }

  hendleOpen = () => {
    this.setState({isOpen : !this.state.isOpen})
  }

  render() {
    console.log(this.state.isOpen);
    return (
      <a  className='btn btn-floating' onClick={this.hendleOpen}>
        <i className="material-icons">
          notifications
        </i>
      </a>
    )
  }
}

export default Notifications
