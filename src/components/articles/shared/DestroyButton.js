import React, {Component} from 'react'
import {deleteArticle} from '../../../store/actions/articleActions'
import {connect} from 'react-redux'

class DestroyButton extends Component  {

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.props.id);
    this.props.deleteArticle(this.props.id)
  }

  render() {
    const id = this.props.id
    return (
      <a onClick={this.handleClick}>delete {id}</a>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArticle: (id) => dispatch(deleteArticle(id))
  }
}
export default connect(null, mapDispatchToProps)(DestroyButton);
