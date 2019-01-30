import React from "react"

class CommentItem extends React.Component {
  render() {
    console.log(this.props.comment);
    return (
        <div>
          {this.props.comment.id}
          {this.props.comment.body}
        </div>
    )
  }
}


export default CommentItem;
