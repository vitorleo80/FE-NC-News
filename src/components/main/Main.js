import React, { Component, Fragment } from "react"
import { Row, Col, Card, CardTitle , Button} from "react-materialize"
import "./Main.css"
import {Link} from 'react-router-dom'
import {getData, UsersFromArticles, formatData } from '../../utils'
import TopArticles from '../toparticles/TopicArticles'


class Main extends Component {
    
    state = {
        users: [],
        articles: [],
        error: false
      } 

    componentDidMount = async () => {
        const {articles} = await getData("/articles")
        this.setState({articles})

        let topArticles = articles.sort(function(a, b) {
            return b.votes - a.votes;
        })
        
        let users = UsersFromArticles(articles)
        let sortedUsers = users.sort((a, b) => a[1] - b[1])
        let top3UsersObj = sortedUsers.slice(-3).reduce(function (acc, pair) {
            acc[pair[0]] = pair[1];
            return acc;
        }, {})
        let top3Users = formatData(top3UsersObj)
        this.setState({
            articles: topArticles.slice(0, 4),
            users: top3Users
          })
   } 
        

   render(){
    const { articles, users } = this.state
       return (
          
           <Fragment>
           <div className='topArticles'>   
           <Col s={8} m={4} l={2} className='topArticles1'>
           <TopArticles articles={articles.slice(0, 2)}/>
           </Col>
           <Col s={8} m={4} l={2}  className='topArticles1'>
           <TopArticles articles={articles.slice(2, 4)}/>
           </Col>
           </div>
           
            
           <div className="post">
           <Col s={4} s={1} m={4} l={8} className='postArticle' >
           <Card className='small'
           header={<CardTitle image={`https://source.unsplash.com/user/maguay/640x640`}></CardTitle>}
           actions={[
           <Link to={`/post`}>
               <Button
                 waves="light"
                 className='grey'
                 node="a"
               >
                 Create Post
               </Button>
              </Link>
           ]}>
           <p className="instructions">Start a thread</p>
           </Card>
           </Col>
           </div>

           
           </Fragment>
           
           
           
           
       )
   }
}

export default Main
        
           
           
           
           
           
        


    
    

