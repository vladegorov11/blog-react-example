import React, {Component} from 'react'
import {deleteArticle} from '../../../store/actions/articleActions'
import {connect} from 'react-redux'

class DestroyButton extends Component  {

  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteArticle(this.props.id)
  }

  render() {
    return (
      <a href='#' onClick={this.handleClick} >
        <i className="material-icons">
          delete
        </i>
      </a>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArticle: (id) => dispatch(deleteArticle(id))
  }
}
export default connect(null, mapDispatchToProps)(DestroyButton);
