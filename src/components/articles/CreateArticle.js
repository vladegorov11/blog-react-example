import React, { Component } from 'react';
import {createArticle} from '../../store/actions/articleActions'
import {connect} from 'react-redux'

class CreateArticle extends Component {
  state = {
    title: '',
    content: '',
    image: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createArticle(this.state)
  }

  handleFile = (e) => {
    this.setState({
      [e.target.id]: e.target.files[0]
    })
  }
  render() {
    return (
       <div className="container">
          <form className='white' onSubmit={this.handleSubmit}>
            <h5 className='grey-text text-darken-3 center'>Create article </h5>

            <div className='input-field'>
              <label htmlFor='title'>Article title</label>
              <input type='text' id='title' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
            <label htmlFor='content'>Article title</label>
            <textarea className='materialize-textarea' id='content' onChange={this.handleChange}/>
            </div>
            <input type="file" id='image' onChange={this.handleFile}/>
            <div className='input-field'>
              <button className='btn pink lighten-1 z-depth-0'>Create</button>
            </div>
          </form>
       </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (article) => dispatch(createArticle(article))
  }
}
export default connect(null, mapDispatchToProps)(CreateArticle);
