import React from 'react'
import { Card, Col, Button, CardTitle } from "react-materialize"
import IconButton from '../Button/IconButton'
import {Link} from 'react-router-dom'
import Comments from '../comments/Comments'



const Article = (props) => {
    const {article, index, handleVoteClick, handleChange, addComment, articlesSize, inputComments} = props
    if(articlesSize > 1) {
    return (
      <div className='articlesCard'>
      <Col key={article._id} m={3} s={6}>
        <Card
        key={`card${index}`}
         header={<CardTitle image= {`https://source.unsplash.com/collection/630995/480x480`}></CardTitle>}
          className="black"
          textClassName="white-text"
          title={article.title}
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
            //see all comments of this article
            <Link key = {`link${index}`} to={{pathname:`/articles/${article._id}/comments`, 
                      state: {articles: article.title, id:`actions3${index}`} }}>
            <Button
              key={`button${index}`}
              waves="light"
              className='grey'
              
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
              
            >
              See Article
            </Button>
           </Link>
            
          ]}
        >
          {`${article.body.replace(/^(.{300}[^\s]*).*/, "$1")}...`}
        </Card>
      </Col>
      <div key = {`group${index}`}className="input-group">
      <div key = {`group1${index}`} className="input-group-prepend">
      <textarea 
        key = {`textarea${index}`}
        className="form-control"
        aria-label="Comment textarea"
        placeholder='Post your comment about this article'
        onChange={handleChange}
        value={inputComments}
      />
      <IconButton
            key={`${index}`}
            className="btn btn-secondary"
            id={article._id}
            colour="blue"
            index={index}
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
        <div className='articlesCard'>
      <Col key={article._id} m={3} s={6}>
        <Card
        key={`card${index}`}
         header={<CardTitle image= {`https://source.unsplash.com/collection/630995/480x480`}></CardTitle>}
          className="black"
          textClassName="white-text"
          title={article.title}
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
            // <a key={`a5${index}`}></a>,           
          ]}
        >
          {`${article.body.replace(/^(.{300}[^\s]*).*/, "$1")}...`}
        </Card>
      </Col>
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
    <Comments url={`/articles/${article._id}/comments`} article_title={article.title}/>
    
    </div>
      )
    }
       

      
}


export default Article;