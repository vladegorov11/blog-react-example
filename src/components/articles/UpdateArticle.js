import React, {Component} from 'react'
import {getArticle} from '../../store/actions/articleActions'
import {connect} from 'react-redux'
import {LineLoader} from '../../pages/loaders'

class UpdateArticle extends Component {
  state = {
    article: false
  }
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.createArticle(this.state, this.props.history)
  }

  handleFile = (e) => {
    this.setState({
      [e.target.id]: e.target.files[0]
    })
  }

  render() {
    if (this.props.title) {
      return (
        <div className="container">
           <form className='white' onSubmit={this.handleSubmit}>
             <h5 className='grey-text text-darken-3 center'>Create article </h5>
             <div className='input-field'>
               <label htmlFor='title'>Article title</label>
               <input type='text' id='title' onChange={this.handleChange} value={this.props.title}/>
             </div>
             <div className='input-field'>
             <label htmlFor='content'>Article content</label>
               <textarea className='materialize-textarea' id='content' onChange={this.handleChange} value={this.props.content}/>
             </div>
             <div className='input-field'>
               <select id='category' value={this.props.category.id} onChange={this.handleChange} >
                 {this.props.categories.map(category => {
                   return (<option key={category.id} value={category.id}>{category.name}</option>)
                 })}
               </select>
             </div>
             <input type="file" id='image' onChange={this.handleFile}/>
             <div className='input-field'>
               <button className='btn pink lighten-1 z-depth-0'>Create</button>
             </div>
           </form>
        </div>
      )
    }else {
      return(<LineLoader/>)
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle: (id) => dispatch(getArticle(id))
  }
}
const mapStateToProps = (state) =>  {
  const {image, title, content, category} = state.article.article
  return {
    title: title,
    content: content,
    article: true,
    category: category,
    categories: state.category.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticle);
