import React, { Component, Fragment } from "react"
import { Card, Button, CardTitle } from "react-materialize";
import {Link} from 'react-router-dom'
import {getData} from '../../utils'
import "./Topics.css"
import Loading from '../loading/Loading'


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
       <Fragment>
        {topics.length > 0 && (    
       <div> 
           <h1> articles by topic </h1>
       <div className="topics">
         {topics.map((topic, index) => {
             const url = topic.title === 'Cooking' ? 'https://source.unsplash.com/collection/575196/480x480' :
               (topic.title === 'Coding' ? 'https://source.unsplash.com/collection/1239020/480x480' :
                ' https://source.unsplash.com/collection/2245893/480x480')
                return (
                    <Card
                      header={<CardTitle image={url}/>}
                      key={index}
                      className="black"
                      textClassName="white"
                      title={topic.title.toUpperCase()}
                      actions={[
                        <Link key={`link${index}`}to={`/topics/${topic.title.toLowerCase()}/articles`}>
                        <Button
                          key={`actions1${index}`}
                          waves="light"
                          className='red'
                        >
                          Read Articles
                          </Button>
                          </Link>
                        ]}
                      >
                    </Card>
                )
              })}
             
      </div>
      </div>
           )}
           {topics.length === 0 && <Loading />}
         </Fragment>
    )


  }


}
export default Topics
                        
                      
                      
           
            
           
                  
            
          




  


   