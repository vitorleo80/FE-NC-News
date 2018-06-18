import React, { Component, Fragment } from "react"
import {getData, voteArticle, getUsersId, postComment, getComments, deleteComment, voteComment} from '../../utils'
import "./Articles.css"
import Article from './Article'
import Comments from '../comments/Comments'
import Loading from '../loading/Loading'




class Articles extends Component {
  
  state = {
   articles: [],
   comments: [],
   comment: ''
  }

 componentDidMount = async () => {
       if((this.props.match.url === '/articles') ||
          (this.props.match.path === '/topics/:topic_id/articles')){
       const {url} = this.props.match
       const {articles} = await getData(url)
       this.setState({
         articles
        })
      } else {
        const {url} = this.props.match
        const {articles} = await getData(url)
        let {comments} = await getComments(url)
        comments = comments.sort((a, b) => b.created_at - a.created_at)
        this.setState({articles, comments})
      }
  }
 
  componentDidUpdate = async (prevProps, prevState) => {
    const {url} = this.props.match
    if (prevProps.match.url !== url) {
     const {articles} = await getData(url)
     let {comments} = await getComments(url)
     comments = comments.sort((a, b) => b.created_at - a.created_at)
     this.setState({articles, comments})
    }
 
}
    



  
render(){
    let {articles} = this.state
    if(!Array.isArray(articles)){
      articles = [articles]
    } 

  return(
    <Fragment>
      {articles.length > 0 && (
    <div className="container">
    {this.state.articles.length > 1 && <h1> articles </h1>}
      {articles.map((article, index) => { 
        return <Article key={`article${index}`} article={article} index={index}  handleVoteClick={this.handleVoteClick} 
        handleChange={this.handleChange} addComment={this.addComment} articlesSize={articles.length} inputComments={this.state.comment} />
      })}
         
     <Comments comments={this.state.comments} handleDelete={this.handleDelete} handleVoteCommentClick={this.handleVoteCommentClick}/> 
     
    <p>Articles</p>
    </div>
    )}
      {articles.length === 0 && <Loading />}
    </Fragment>
    )

  
  } 
  handleVoteClick = (id, direction, index) => {
      const {articles} = this.state
        voteArticle(id, direction)
      
        if(Array.isArray(articles)){
          const articles = [...this.state.articles]
          articles[index].votes = direction === "up" ? articles[index].votes + 1 : articles[index].votes - 1
          this.setState({articles})
        } else {
          const articles = this.state.articles
          articles.votes = direction === "up" ? articles.votes + 1 : articles.votes - 1
          this.setState({articles})
      }
      
     
  }
    
  handleChange = event => {
      this.setState({ 
        comment: event.target.value
        
       })
    }
  


    addComment = (id, key, index) => {

      const user = getUsersId()
      const newComment = {
        body: this.state.comment,
        belongs_to: id,
        created_by: user[0]
      }
      postComment(id, newComment)

        const {articles} = this.state
        
      if(Array.isArray(articles)){
        const articles = [...this.state.articles]
        articles[index].comments = articles[index].comments + 1
        const comments = [...this.state.comments, newComment]
        this.setState({
          articles,
          comments,
          comment: ""
        })
        
      }else {
        const articles = this.state.articles
        newComment.votes = 0
        newComment.created_by = user[1]
        const comments = [...this.state.comments, newComment]
        this.setState({
          articles,
          comments,
          comment: ""
          
        })
      }
    }

    handleDelete = (id, direction , index) => {
      deleteComment(id) 
      const comments = [...this.state.comments]
      const newComments = comments.filter(comment => comment !== comments[index])
      this.setState({
        comments: newComments
      })  
    }

    handleVoteCommentClick = (id, direction, index) => {
          voteComment(id, direction)
        
            const comments = [...this.state.comments]
              comments[index].votes = direction === "up" ? comments[index].votes + 1 : comments[index].votes - 1
              this.setState({comments})
      }

}
        
export default Articles
        
        
         


      
        
      
     










   
        