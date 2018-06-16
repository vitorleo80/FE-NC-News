import React, { Component } from "react"
import {getData, voteArticle, getUsersId, postComment} from '../../utils'
import "./Articles.css"
import Loading from '../loading/Loading'
import Article from './Article'



class Articles extends Component {
  
  state = {
   articles: [],
   comment: ''
  }

 componentDidMount = async () => {
       const {url} = this.props.match
       const {articles} = await getData(url)
  
       this.setState({articles})
  }

  componentDidUpdate = async (prevProps, prevState) => {
     const {url} = this.props.match
     if (prevProps.match.url !== url) {
      const {articles} = await getData(url)
      this.setState({articles})
     }
  
}
  
render(){
    let {articles} = this.state

   
    if(!Array.isArray(articles)){
      articles = [articles]
    } 

    if(!articles.length) {
      return <Loading />
     }
   return(
    <div className="articles">
      {articles.map((article, index) => { 
        return <Article key={`article${index}`} article={article} index={index} handleVoteClick={this.handleVoteClick} 
        handleChange={this.handleChange} addComment={this.addComment} articlesSize={articles.length} inputComments={this.state.comments}/>
      })}
    </div>
    )

  
  } 
    handleVoteClick = (id, direction, index) => {
      voteArticle(id, direction)
      const articles = [...this.state.articles]
      articles[index].votes = direction === "up" ? articles[index].votes + 1 : articles[index].votes - 1
      this.setState({articles})
    }
  

    handleChange = event => {
      this.setState({ comment: event.target.value });
    }

    addComment = (id, key, index) => {

      const user = getUsersId()
      const newComment = {
        body: this.state.comment,
        belongs_to: id,
        created_by: user
      }
      postComment(id, newComment).then(() =>{
        const articles = [...this.state.articles]
        articles[index].comments = articles[index].comments + 1
        this.setState({
          articles,
          comments: ""
        })
      })
     

      }

}
export default Articles









   
        