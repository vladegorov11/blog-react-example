import React from 'react'
import CommentItem from "./CommentItem"

const CommentList = ({comments}) => {
    return (
      <div className='articles-container'>
        {comments.map(comment => {
          return (
            <CommentItem comment={comment} key={comment.id}/>
          )
        })}
      </div>
    );
}

export default CommentList
