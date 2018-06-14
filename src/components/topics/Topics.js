import React, { Component } from "react"
import { Card, Col, Button, CardTitle } from "react-materialize";
import {Link} from 'react-router-dom'
import {getData} from '../../utils'
import "./Topics.css"


class Topics extends Component {
   
   state = {
    topics: []
   }

    componentDidMount = async () => {
        const {url} = this.props.match
        const data = await getData(url)
        this.setState({topics: data.topics})
   }


   componentDidUpdate = async (prevProps, prevState) => {
     const {url} = this.props.match
     if (prevProps.match.url !== url){
       const data = await getData(url)
       this.setState({topics: data.topics})
     }
   }



  


   
    render(){
        const topics = this.state.topics
        return(
        <div className="topics">
          {topics.map((topic, index) => {
            return (
              <Col key={topic._id} m={3} s={1}>
                <Card
                  key={index}
                  className="grey"
                  textClassName="white"
                  title={topic.title.toUpperCase()}
                  actions={[
                    <Link to={`/topics/${topic.title.toLowerCase()}/articles`}>
                    <Button
                      key={`actions1${index}`}
                      waves="light"
                      className='salmon'
                      node="a"
                    
                    >
                      Read All Articles
                    </Button>
                    </Link>
                  ]}
                >
                  
                  
                </Card>
              </Col>
            )
          })}
         
        </div>
        
        
       
              
    )
        
        
} 

    
}
export default Topics
        