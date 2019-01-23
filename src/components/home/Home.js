import React, { Component } from 'react';
import Articles from '../articles/Articles'
import Categories from "./Categories"
import {connect} from 'react-redux'
import {getArticles} from '../../store/actions/articleActions'
import {LineLoader} from '../../pages/loaders'

class Home extends Component {

  componentDidMount() {
      this.props.getArticles();
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      if (window.scrollY > document.documentElement.offsetHeight - window.innerHeight - 300){

      }
  }

  render() {
    console.log('asdasdada',this.props);
    const {articles} = this.props;
    if (this.props.isLoading){
      return (
        <LineLoader/>
      )} else {
    return (
      <div className='container home'>
        <div className='row'>
          <div className='col s12 m8'>
            <Articles articles={articles}/>
          </div>
          <div className='col s12 m4'>
            <Categories/>
          </div>
        </div>
      </div>
    )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticles())
  }
}

const mapStateToProps = (state) =>  {
  return {
   articles: state.article.articles,
   hasErrored:  state.article.hasErrored,
   isLoading: state.article.isLoading
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
