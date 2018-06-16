import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css'
import Articles from './components/articles/Articles'
import Nav from './components/nav_Bar/Nav'
import Header from './components/header/Header'
import Users from './components/users/Users'
import Topics from './components/topics/Topics'
import Main from './components/main/Main'
import Comments from './components/comments/Comments'
import NotFound from './components/error/NotFound'
import PostArticle from './components/articles/PostArticle'



class App extends Component {

  state={
    user: "5b07f205990a3721f68dffb9"
  }
 
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Switch>
        <Route
            exact
            path="/post"
            render={props => (
              <PostArticle {...props} user={this.state.user}/>
            )}
          />
          <Route
            exact
            path="/articles"
            render={props => {
              return <Articles {...props}  />
            }}
          />
          <Route
            exact
            path="/users"
            render={props => {
              return <Users {...props} />
            }}
          />
         <Route
            path="/topics/:topic_id/articles"
            render={props => {
              return <Articles {...props}  />;
            }}
          />

          <Route
            exact
            path="/topics"
            render={props => {
              return <Topics {...props} />;
            }}
          />
          <Route
          exact
            path="/articles/:article_id"
            render={props => {
              return <Articles {...props} />
            }}
          />
          <Route
            path="/articles/:article_id/comments"
            render={props => {
              return <Comments {...props}/>;
            }}
          />

          <Route exact path="/" component={Main} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;

            
  
          


        


         

        