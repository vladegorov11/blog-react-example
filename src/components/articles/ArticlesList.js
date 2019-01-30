import React from 'react'
import {Link} from 'react-router-dom'
import DestroyButton from './shared/DestroyButton'
import LikeButton from './shared/LikeButton'
import EditButton from './shared/EditButton'
import {connect} from 'react-redux'

class ArticlesList extends React.Component  {
  render(){
    const article = this.props.article
    const user = this.props.user
    return (
      <div className="card ">
        <div className="card-image">
          <img src='https://images.jazztour.ru/images/af3271b0-db77-11e8-9df8-65393269b972.jpeg' alt="description "/>
          <span className="card-title">{article.title}</span>
          <a className="category-btn halfway-fab waves-effect waves-light">{article.category.name}</a>
        </div>
        <div className="card-content">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
        <div className="card-action">
          <Link to={'/article/' + article.id}>Read more</Link>
          <div className='right'>
          <EditButton  article={article} user={user}/>
          <DestroyButton  article={article} user={user}/>
          <LikeButton id={article.id} user={user}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(ArticlesList);
