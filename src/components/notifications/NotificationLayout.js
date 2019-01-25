import React from "react"

const NotificationLayout = (props) => {
  const isOpenClass = props.isOpen ? ' notification-open' : 'notification-close'
  return (
    <div className={'notification ' + isOpenClass}>
      <ul className="collection">
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <span className="title">Title</span>
          <p>First Line
             Second Line
          </p>
          
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">insert_chart</i>
          <span className="title">Title</span>
          <p>First Line
             Second Line
          </p>

        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">play_arrow</i>
          <span className="title">Title</span>
          <p>First Line
             Second Line
          </p>

        </li>
      </ul>
    </div>
  )
}

export default NotificationLayout
