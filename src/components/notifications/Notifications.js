import React from 'react'
import NotificationLayout from './NotificationLayout'

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
      <div className='notify-section'>
        <a  className='btn btn-floating waves-effect waves-light' onClick={this.hendleOpen}>
          <i className="material-icons">
            notifications
          </i>
        </a>
        <NotificationLayout isOpen={this.state.isOpen}/>
      </div>
    )
  }
}

export default Notifications
