import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css'
import Articles from './components/articles/Articles'
import Nav from './components/nav_Bar/Nav'
import Header from './components/header/Header'
import Users from './components/users/Users'
import Topics from './components/topics/Topics'
import Main from './components/main/Main'
import NotFound from './components/error/NotFound'
import Article from './components/articles/Article'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Switch>
          <Route
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
            exact
            path="/topics"
            render={props => {
              return <Topics {...props} />
            }}
          />
          <Route
            exact
            path="/articles/:article_id"
            render={props => {
              return <Articles {...props} />
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
  
          


        


         

        