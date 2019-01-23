import React from 'react'
import {Link} from 'react-router-dom'
import DestroyButton from './shared/DestroyButton'
const ArticlesList = ({article}) => {
  return (
    <div className="card ">
      <div className="card-image">
        <img src='https://images.jazztour.ru/images/af3271b0-db77-11e8-9df8-65393269b972.jpeg' alt="description "/>
        <span className="card-title">{article.title}</span>
      </div>
      <div className="card-content">
        <p>{article.content}</p>
      </div>
      <div className="card-action">
        <Link to={'/article/' + article.id}>Read more</Link>
      </div>
      <DestroyButton  id={article.id}/>
    </div>
  )
}

export default ArticlesList
