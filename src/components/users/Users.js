import React, { Component } from "react"
import { Card, Col, Button, CardTitle } from "react-materialize";
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
        <div className="Users">
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
                  {/* {user.username} */}
                </Card>
              </Col>
            )
          })}
        </div>
       
              
    )
        
        
} 

    
}
export default Users
        