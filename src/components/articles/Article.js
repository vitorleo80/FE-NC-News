import React from 'react'
import { Card, Button} from "react-materialize"
import IconButton from '../button/IconButton'
import {Link} from 'react-router-dom'




const Article = (props) => {
    const {article, index, handleChange, addComment, articlesSize, inputComments, handleVoteClick} = props
    if(articlesSize > 1) {
    return (
      <div className='card'>
        <Card
        key={`card${index}`}
          className="black"
          textClassName="grey"
          title={`${article.title.replace(/^(.{80}[^\s]*).*/, "$1")}...`}
          actions={[
            <IconButton
              key={`actions1${index}`}
              id={article._id}
              colour="green"
              func={handleVoteClick}
              direction="up"
              index={index}
              icon="sentiment_very_satisfied"
            />,
            <IconButton
              key={`actions2${index}`}
              id={article._id}
              colour="red"
              index={index}
              func={handleVoteClick}
              direction="down"
              icon="sentiment_very_dissatisfied"
          />,
            <a key={`a1${index}`}>{article.votes} Votes</a>,
            <a key={`a2${index}`}>Created by: &nbsp; {article.created_by}</a>,
            <a key={`a4${index}`}>Topic: {article.belongs_to}</a>,
            <a key={`a5${index}`}>Comments: {article.comments}</a>,
           
            <Link key={`actions3${index}`} to={`/articles/${article._id}`}>
            <Button
              key={`actions4${index}`}
              waves="light"
              className='grey'
              
            >
              See Article
            </Button>
           </Link>
            
          ]}
        >
          {`${article.body.replace(/^(.{100}[^\s]*).*/, "$1")}...`}
        </Card>
    
      <div key = {`group${index}`}className="input-group">
      <div key = {`group1${index}`} className="input-group-prepend">
      <textarea 
        key = {`textarea${index}`}
        className="form-control"
        aria-label="Comment textarea"
        value={inputComments}
        placeholder='Post your comment about this article'
        onChange={handleChange}
      />
      <IconButton
            key={`Comment${index}`}
            className="btn btn-secondary"
            id={article._id}
            index={index}
            colour="blue"
            func={addComment}
            icon="send"
            align="left"
            type="submit"
            
          />
          {" "}
          
      </div>
    </div>
    </div>
   
    )} else {
      
      //Returning a Single Article
      return (
        <div className='card'>
          <h3> {article.title} </h3>
        <Card
         key={`card${index}`}
         className="black"
          textClassName="white-text"
          actions={[
            <IconButton
              key={`actions1${index}`}
              id={article._id}
              colour="green"
              func={handleVoteClick}
              direction="up"
              index={index}
              icon="sentiment_very_satisfied"
            />,
            <IconButton
              key={`actions2${index}`}
              id={article._id}
              colour="red"
              
              func={handleVoteClick}
              direction="down"
              index={index}
              icon="sentiment_very_dissatisfied"
          />,
            <a key={`a1${index}`}>{article.votes} Votes</a>,
            <a key={`a2${index}`}>Created by: &nbsp; {article.created_by}</a>,
            <a key={`a4${index}`}>Topic: {article.belongs_to}</a>,
            // <a key={`a5${index}`}></a>,           
          ]}
        >
          {article.body}
        </Card>
      
      <div key = {`group${index}`}className="input-group">
      <div key = {`group1${index}`} className="input-group-prepend">
      <textarea 
        key = {`textarea${index}`}
        className="form-control"
        aria-label="Comment textarea"
        value={inputComments}
        placeholder='Post your comment about this article'
        onChange={handleChange}
      />
      <IconButton
            key={`Comment${index}`}
            className="btn btn-secondary"
            id={article._id}
            index={index}
            colour="blue"
            func={addComment}
            icon="send"
            align="left"
            type="submit"
            
          />
          {" "}
          
      </div>
    </div>
    {/* <Comments comments={comments} handleClick={handleClick} handleVoteClick={handleVoteClick}/> */}
    
    </div>
      )
    }
       

      
}


export default Article;