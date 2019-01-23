import  React, {Component} from 'react'
import {getArticle, clearStore} from '../../store/actions/articleActions'
import {connect} from 'react-redux';
import {LineLoader} from '../../pages/loaders'
import Comments from '../comments/Comments'

class ArticleShow extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
		this.props.getArticle(this.props.match.params.id);
	}

  componentWillUnmount() {
    this.props.clearStore('')
  }

  render() {
    console.log(this.props.article);
  if (this.props.article){
    const {image, content, title, created_at, id } = this.props.article
    return (
      <div className='container section'>
        <div className='card z-depth-0'>
          <div className="card-content">
            <span className='card-title'><h3>{title} id----{id}</h3></span>
            <div className="card-action grey-text lighten-4 gret">
              <div>posted by Vlad Yahorov</div>
              <div>{created_at}</div>
            </div>
            <div className="card-image">
              <img src="https://images.jazztour.ru/images/af3271b0-db77-11e8-9df8-65393269b972.jpeg" alt="description"/>
            </div>
            <p>
              {content}
            </p>
            <Comments/>
          </div>

        </div>
      </div>
  )}else {
    return (
      <LineLoader/>
    )
  }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle: (id) => dispatch(getArticle(id)),
    clearStore: (params) => dispatch(clearStore(params))
  }
}
const mapStateToProps = (state) =>  {
  return {
   article: state.article.article
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShow);
