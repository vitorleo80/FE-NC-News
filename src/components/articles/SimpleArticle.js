import React from 'react'
import { Card, Col, Button, CardTitle } from "react-materialize"
import IconButton from '../Button/IconButton'
import {Link} from 'react-router-dom'



const SimpleArticle = (props) => {
    const {article, index, handleVoteClick, handleChange, addComment } = props;
    return (
        <div className='articlesCard'>
        <Col key={article._id} m={3} s={6}>
          <Card
           header={<CardTitle image= {`https://source.unsplash.com/collection/630995/480x480`}></CardTitle>}
            className="black"
            textClassName="white-text"
            title={article.title}
            actions={[
              <a key={`a1${index}`}>{article.votes} Votes</a>,
              <a key={`a4${index}`}>Topic: {article.belongs_to}</a>,
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
            {`${article.body.replace(/^(.{100}[^\s]*).*/, "$1")}...`}
          </Card>
        </Col>
      </div>
    
      )

      
}


export default SimpleArticle;