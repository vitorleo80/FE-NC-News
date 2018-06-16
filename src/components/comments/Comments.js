import React, { Component } from "react"
import { Card, Col, Button, CardTitle, Input } from "react-materialize";
import {Link} from 'react-router-dom'
import {getData, voteComment, deleteComment} from '../../utils'
import IconButton from '../Button/IconButton'
import moment from 'moment'



class Comments extends Component {
   
  //  state = {
  //   comments: []
    
  //  }



// componentDidMount = async () => {

//     if(this.props.match){
//       // console.log(this.props.match.url, '***comments')
//       const {comments} = await getData(this.props.match.url)
//       this.setState({comments})
//     } else {
//       // console.log(this.props.articleId, '***article')
//       const {comments} = await getData(this.props.articleId)
//       this.setState({comments})
//     }
// }

// componentDidUpdate = (prevProps, prevState) => {
//   if( prevProps.newcomment!= this.props.newcomment) {
//     const {newcomment} = this.props
//       const comments = [...this.state.comments, newcomment]
//       this.setState({comments})
//   }
// }


     
 
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
    // <p>comments</p>

      
)
    
    
} 
  // handleClick = (id, direction , index) => {
  //   deleteComment(id) 
  //   const comments = [...this.state.comments]
  //   const newComments = comments.filter(comment => comment !== comments[index])
  //   this.setState({
  //     comments: newComments
  //   })  
  // }

 


//   handleVoteClick = (id, direction, index) => {
//     voteComment(id, direction)
  
//       const comments = [...this.state.comments]
//         comments[index].votes = direction === "up" ? comments[index].votes + 1 : comments[index].votes - 1
//         this.setState({comments})
// }


}

export default Comments
                
                
                
                
        




   

        


 


      

  


   