import React from "react"
import CommentList from "./CommentList"
import CommentsForm from "./CommentsForm"
import { connect } from "react-redux"
import {getComments} from '../../store/actions/commentActions'
class Comments extends React.Component  {

  componentWillMount() {
    this.props.getComments(this.props.article)
  }
  render(){
    const comments = this.props.comments
    console.log(comments);
    return (
      <div>
        <CommentsForm />
        {comments ? <CommentList comments={comments}/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comment.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (article) => dispatch(getComments(article))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
