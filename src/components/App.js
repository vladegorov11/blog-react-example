import React, { Component } from 'react';
import { BrowserRouter , Route,Switch } from "react-router-dom";
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Home from './home/Home'
import Navbar from './layout/Navbar'
import ArticleShow from './articles/ArticleShow'
import CreateArticle from './articles/CreateArticle'
import UpdateArticle from './articles/UpdateArticle'
import {NotFound} from '../pages/errors'
import {connect} from 'react-redux'
import requireAuth from './auth/Authenticate';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar user={this.props.user}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup/" component={SignUp} />
            <Route path="/signin/" component={SignIn} />
            <Route path="/article/:id" component={ArticleShow}/>
            <Route path="/articles/new/" component={CreateArticle}/>
            <Route path="/articles_update/:id" component={requireAuth(UpdateArticle)}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) =>  {
  return {
   user: state.user.user
  }
}
export default connect(mapStateToProps)(App);
