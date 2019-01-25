import React, { Component } from 'react';
import {createArticle} from '../../store/actions/articleActions'
import {connect} from 'react-redux'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class CreateArticle extends Component {
  state = {
    title: '',
    content: '',
    image: '',
    category: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createArticle(this.state, this.props.history)
  }

  handleFile = (e) => {
    this.setState({
      [e.target.id]: e.target.files[0]
    })
  }
  render() {
    console.log(this.state);
    const categories = this.props.categories
    return (
       <div className="container">
          <form className='white' onSubmit={this.handleSubmit}>
            <h5 className='grey-text text-darken-3 center'>Create article </h5>
            <div className='input-field'>
              <label htmlFor='title'>Article title</label>
              <input type='text' id='title' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
            <label htmlFor='content'>Article content</label>
              <textarea className='materialize-textarea' id='content' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <select id='category' value={this.state.category} onChange={this.handleChange} >
                {categories.map(category => {
                  return (<option key={category.id} value={category.id}>{category.name}</option>)
                })}
              </select>
            </div>
            <div class="file-field input-field ">
              <div class="btn">
                <span>File</span>
                <input type="file" id='image' onChange={this.handleFile}/>
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text"/>
              </div>
            </div>
            <div className='input-field'>
              <button className='btn lighten-1 z-depth-0'>Create</button>
            </div>
          </form>
       </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (article, history) => dispatch(createArticle(article, history))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
