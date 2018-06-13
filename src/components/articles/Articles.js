import React, { Component } from "react"
import { Card, Col, Button, CardTitle } from "react-materialize";
import fetch from '../../utils'
import "./Articles.css"


class Articles extends Component {
   
   state = {
    articles: []
   }

    componentDidMount = async () => {
        const data = await fetch(`https://norhtcoders-app.herokuapp.com/api${this.props.match.url}`)
        this.setState({articles: data.formatedArticles})
   }


   
    render(){
        const newArticles = [...this.state.articles]
        
        return(
        <div className="articles">
          {newArticles.map((article, index) => {
            return (
              <Col key={index} m={3} s={6}>
                <Card
                 header={<CardTitle image= {`https://source.unsplash.com/collection/630995/480x480`}></CardTitle>}
                  key={article._id}
                  className="black"
                  textClassName="white-text"
                  title={article.title}
                  actions={[
                    <a >{article.votes} Votes</a>,
                    <a>Created by: &nbsp; {article.created_by}</a>,
                    <a >{article.comments} Comments</a>,
                    <Button
                      waves="light"
                      className='red'
                      node="a"
                      href={`/articles/${article._id}`}
                    >
                      read More
                    </Button>
                  ]}
                >
                  {article.body}
                </Card>
              </Col>
            )
          })}
        </div>
       
              
    )
        
        
} 

    
}
export default Articles
        