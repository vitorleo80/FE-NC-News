import React, { Component } from "react"
import { Card, Col, Button, CardTitle } from "react-materialize";
import {getData, voteArticle, getUsersId, postComment} from '../../utils'
import "./Articles.css"
import IconButton from '../Button/IconButton'
import {Link} from 'react-router-dom'
import Loading from '../loading/Loading'



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
      console.log(articles.length)
      return <Loading />
     }
   return(
    <div className="articles">
      {articles.map((article, index) => { 
        return (
          <div className='articlesCard'>
          <Col key={article._id} m={3} s={6}>
            <Card
             header={<CardTitle image= {`https://source.unsplash.com/collection/630995/480x480`}></CardTitle>}
              className="black"
              textClassName="white-text"
              title={article.title}
              actions={[
                <IconButton
                  key={`actions1${index}`}
                  id={article._id}
                  colour="green"
                  func={this.handleVoteClick}
                  direction="up"
                  icon="sentiment_very_satisfied"
                />,
                <IconButton
                  key={`actions2${index}`}
                  id={article._id}
                  colour="red"
                  func={this.handleVoteClick}
                  direction="down"
                  icon="sentiment_very_dissatisfied"
              />,
                <a key={`a1${index}`}>{article.votes} Votes</a>,
                <a key={`a2${index}`}>Created by: &nbsp; {article.created_by}</a>,
                <a key={`a4${index}`}>Topic: {article.belongs_to}</a>,
                //see all comments of this article
                <Link to={{pathname:`/articles/${article._id}/comments`, 
                          state: {articles: article.title, id:`actions3${index}`} }}>
                <Button
                  key={`actions4${index}`}
                  waves="light"
                  className='grey'
                  node="a"
                >
                  Comments {article.comments}
                </Button>
               </Link>,
                //go to individual article
                <Link key={`actions3${index}`} to={`/articles/${article._id}`}>
                <Button
                  key={`actions4${index}`}
                  waves="light"
                  className='grey'
                  node="a"
                >
                  See Article
                </Button>
               </Link>
                
              ]}
            >
              {`${article.body.replace(/^(.{300}[^\s]*).*/, "$1")}...`}
            </Card>
          </Col>
          <div className="input-group">
          <div className="input-group-prepend">
          <textarea
            className="form-control"
            aria-label="Comment textarea"
            placeholder='Post your comment about this article'
            onChange={this.handleChange}
          />
          <IconButton
                key={`${index}`}
                className="btn btn-secondary"
                id={article._id}
                colour="blue"
                func={this.addComment}
                icon="send"
                align="left"
              />
              {" "}
              
          </div>
        </div>
        </div>
        )
      })}
    </div>
    )

  
  } 
    handleVoteClick = (id, direction) => {
      voteArticle(id, direction)
  }

    handleChange = event => {
      this.setState({ comment: event.target.value });
    }

    addComment = (id) => {
      // const article_id = this.props.match.url.substring(10,34)
      const user = getUsersId()
      const newComment = {
        body: this.state.comment,
        belongs_to: id,
        created_by: user
      }
      postComment(id,newComment)
      }

}
export default Articles









   
        