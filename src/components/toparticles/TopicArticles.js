import React, { Component } from "react"
import SimpleArticle from '../articles/SimpleArticle'

class TopArticles extends Component {
  state = {
    sortedByVotes: true
  };
  render() {
    const { articles } = this.props
    return(
      <div className="articles">
        {articles.map((article, index) => { 
          return <SimpleArticle article={article} key={index}/>
        })}
      </div>
      )
  }
  
}

export default TopArticles
