import React, { Component } from "react"
import { Card, Col } from "react-materialize"
import IconButton from '../button/IconButton'
import moment from 'moment'



class Comments extends Component {
  
  render(){
      const comments = this.props.comments
  
      
       
      return(
        <div className="comments">
        
        {comments.map((comment, index) => { 
          let today = Date.now()
          let start = moment(today)
          let end = moment(comment.created_at)
          let time = start.diff(end, 'days')
          let result = time === 0 ? 'Today' : (time === 1 ? 'Yesterday' : `${time} Days Ago`)
        return (
            
            <div key={`comment${index}`}className = 'commentsCard'>
            
            <Col m={6} s={12}>
            <Card
              className="black"
              textClassName="white"
                actions={[
                  <IconButton
                  key={`actions1${index}`}
                  id={comment._id}
                  colour="green"
                  func={this.props.handleVoteCommentClick}
                  direction="up"
                  index={index}
                  icon="sentiment_very_satisfied"
               
                />,
                <IconButton
                  key={`actions2${index}`}
                  id={comment._id}
                  colour="red"
                  func={this.props.handleVoteCommentClick}
                  direction="down"
                  index={index}
                  icon="sentiment_very_dissatisfied"
                />,
                  <a key={`a1${index}`}>{comment.votes} Votes</a>,
                  <a key={`a2${index}`}>Created by: &nbsp; {comment.created_by}</a>,
                  <a key={`a3${index}`}>Created&nbsp;{result}</a>,
                  <IconButton
                  key={`actions3${index}`}
                  id={comment._id}
                  colour="grey"
                  func={this.props.handleDelete}
                  icon="highlight_off"
                  index={index}
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
        
    
          
    )
        
        
    } 
      
    
  }
    
    export default Comments
              
              
              
              
              
              
  
  
  
  


     
 
                
                
                
                
        




   

        


 


      

  


   