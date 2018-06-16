import React, { Component } from "react"
import { Card, Col, Button, CardTitle } from "react-materialize";
import {Link} from 'react-router-dom'
import {getData, voteComment, deleteComment} from '../../utils'
import IconButton from '../Button/IconButton'
import moment from 'moment'



class Comments extends Component {
   
   state = {
    comments: [],
    article_title: ''
    
   }

    componentDidMount = async () => {
        // const {url} = this.props.match || this.props
        const url = this.props.url
        // const article_title = this.props.location.state.articles 
        const article_title = this.props.article_title
        const {comments} = await getData(url)
        this.setState({comments, article_title})
   }
   
  //  componentDidUpdate = async (prevProps, prevState) => {
  //    const {url} = this.props.match
  //    if (prevProps.match.url !== url){
  //     const {comments} = await getData(url)
  //     this.setState({comments})
  //   }
  // }

        


 
  render(){
      const comments = this.state.comments

      return(
        <div className="comments">
        {comments.map((comment, index) => { 
          let today = Date.now()
          let start = moment(today)
          let end = moment(comment.created_at)
          let result = start.diff(end, 'days')
  
          return (
            <div className = 'commentsCard'>
            <Col m={6} s={12}>
            <Card
              className="black"
              textClassName="white"
              title={this.state.article_title}
                actions={[
                  <IconButton
                  key={`actions1${index}`}
                  id={comment._id}
                  colour="green"
                  func={this.handleClick}
                  direction="up"
                  icon="sentiment_very_satisfied"
                />,
                <IconButton
                  key={`actions2${index}`}
                  id={comment._id}
                  colour="red"
                  func={this.handleClick}
                  direction="down"
                  icon="sentiment_very_dissatisfied"
                />,
                  <a key={`a1${index}`}>{comment.votes} Votes</a>,
                  <a key={`a2${index}`}>Created by: &nbsp; {comment.created_by}</a>,
                  <a key={`a3${index}`}>Created&nbsp;{result}&nbsp;days ago</a>,
                  <IconButton
                  key={`actions3${index}`}
                  id={comment._id}
                  colour="grey"
                  func={this.handleClick}
                  icon="highlight_off"
                />
                ]}
                
              >
                {comment.body}
              </Card>
            </Col>
          </div>
              
              
              
              
              
              




          )
        }
      )
        }
      </div>
      
// //  <div>     
// //  <p>Comments </p>
// //  <p>{this.props.url}</p>
// //  <p>{this.props.article_title}</p>
  
//  </div>       
  )
      
      
} 
handleClick = (id, direction = 'error') => {
  direction === 'error' ? deleteComment(id) :
  voteComment(id, direction)
}


}

  
  
export default Comments


      

  


   