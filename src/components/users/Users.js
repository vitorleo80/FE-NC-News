import React, { Component } from "react"
import { Card, Col, CardTitle } from "react-materialize";
import {getData} from '../../utils'
import "./Users.css"


class Users extends Component {
   
   state = {
    users: []
   }

    componentDidMount = async () => {
      const {url} = this.props.match  
      const data = await getData(url)
        this.setState({users: data.users})
     
   }


   
    render(){
        const newUsers = this.state.users
        
        return(
          <div><h1> users </h1>
        <div className="users">
            
          {newUsers.map((user, index) => {
            return (
              <Col key={index} m={2} s={1}>
                <Card
                 header={<CardTitle image= {user.avatar_url}></CardTitle>}
                  key={user._id}
                  className="black"
                  textClassName="white"
                  title={`UserName: ${user.username}`}
                  actions={[
                    <a key={`user${index}`}>Name: &nbsp; {user.name}</a>
                  ]}
                >

                </Card>
              </Col>
            )
          })}
        </div>
          </div> 
       
              
    )
        
        
} 

    
}
export default Users
        