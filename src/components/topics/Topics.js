import React, { Component } from "react"
import { Card, Col, Button, CardTitle } from "react-materialize";
import fetch from '../../utils'
import "./Topics.css"


class Topics extends Component {
   
   state = {
    topics: []
   }

    componentDidMount = async () => {
        const data = await fetch(`https://norhtcoders-app.herokuapp.com/api${this.props.match.url}`)
        this.setState({topics: data.topics})
   }


   
    render(){
        const newTopics = [...this.state.topics]
        
        return(
        <div className="topics">
          {newTopics.map((topic, index) => {
            return (
              <Col key={index} m={3} s={6}>
                <Card
                 header={<CardTitle image= {`https://source.unsplash.com/collection/630995/480x480`}></CardTitle>}
                  key={topic._id}
                  className="black"
                  textClassName="white-text"
                  title={topic.title}
                  actions={[
                    <Button
                      waves="light"
                      className='red'
                      node="a"
                      href={`/topics/${topic._id}`}
                    >
                      See Articles
                    </Button>
                  ]}
                >
                  <p>{topic.slug}</p>
                  
                </Card>
              </Col>
            )
          })}
         
        </div>
       
              
    )
        
        
} 

    
}
export default Topics
        