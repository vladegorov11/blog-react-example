import React from 'react';
import {Link} from 'react-router-dom'
const  EditButton = (props) =>  {
    if (props.user && props.user.id === props.article.user.id){
      return (
        <Link to={'/articles_update/' + props.article.id}><i className="material-icons">edit</i></Link>
      )
    }else {
      return null
    }

}
export default EditButton;
