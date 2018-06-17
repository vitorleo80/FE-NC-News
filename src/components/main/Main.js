import React, { Component } from "react"
import { Row, Col, Card, CardTitle , Button} from "react-materialize"
import "./Main.css"
import {Link} from 'react-router-dom'
import {getData, UsersFromArticles, formatData } from '../../utils'
import TopArticles from '../toparticles/TopicArticles'
import NotFound from '../error/NotFound'


class Main extends Component {
    
    state = {
        users: [],
        articles: [],
        error: false
      } 

    componentDidMount = async () => {
        const {articles} = await getData("/articles")
        if(!articles) this.setState({error: true})
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
        const { articles, users, error } = this.state
        if(error){
            return (
                <div>
                <NotFound {...this.props} />
                </div>
            )  
        }
 
        return (
            
          <div className='body'>
            <div className="title">
              
                <h1>
                  top articles
                </h1>
              
              </div>
            
         
          <Row>
          <Col m={6} s={12} className='topArticles1'>
          <TopArticles articles={articles.slice(0, 2)}/>
          </Col>
          <Col m={6} s={12} className='topArticles2'>
          <TopArticles articles={articles.slice(2, 4)}/>
          </Col>
          </Row>
          
           
          <Row> 
          <Col m={6} s={6} className='userTitle'>
          <div className="title1">
              <h1>top users</h1>
          </div>
          </Col>
          <Col m={6} s={6} className='userTitle'>
          <div className="title1">
              <h1>post an article</h1>
          </div>
          </Col>
          </Row>

          <Row> 
          <Col m={6} s={3} className='userleaderbox'>  
           {this.state.users.length > 1 &&
          <div id="container">
            <div className="champ">
            <div className="name">USER</div><div className="score">ARTICLES</div>
            </div>

            <div className="champ">
            <div className="name">{Object.keys(users[2])}</div><div className="score">{Object.values(users[2])}</div>
            </div>

            <div className="champ">
            <div className="name">{Object.keys(users[1])}</div><div className="score">{Object.values(users[1])}</div>
            </div>

            <div className="champ">
            <div className="name">{Object.keys(users[0])}</div><div className="score">{Object.values(users[0])}</div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            </div>

            
          }
          </Col>
          <Col m={6} s={3} className='userTitle'>
          <div className="title1">
          <Card key={1454654}className='small'
            header={<CardTitle image={`https://source.unsplash.com/user/maguay/480x480`}></CardTitle>}
            actions={[
            <Link key={'postlink'}to={`/post`}>
            <Button
            waves="light"
            className='grey'
            >
            Create Post
            </Button>
            </Link>
            ]}>
            Contribute to our active community. Publish your article!
          </Card>
          </div>
          </Col>
          </Row>
          </div>
    
          
        
        
        
    )
}
}

export default Main
        
        

        
           
           
           
           
           
        


    
    

