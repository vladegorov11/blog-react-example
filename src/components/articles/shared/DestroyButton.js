import React, {Component} from 'react'
import {deleteArticle} from '../../../store/actions/articleActions'
import {connect} from 'react-redux'

class DestroyButton extends Component  {

  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteArticle(this.props.article.id)
  }

  render() {
    if (this.props.user &&  this.props.user.id === this.props.article.user.id){
      return (
        <a href='#' onClick={this.handleClick} >
          <i className="material-icons">
            delete
          </i>
        </a>
      )
    }else {
      return null
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArticle: (id) => dispatch(deleteArticle(id))
  }
}
export default connect(null, mapDispatchToProps)(DestroyButton);
