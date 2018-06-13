import React, { Component } from "react"
import { Card, Col, Button, CardTitle } from "react-materialize";
import fetch from '../../utils'
import "./Users.css"


class Users extends Component {
   
   state = {
    users: []
   }

    componentDidMount = async () => {
        const data = await fetch(`https://norhtcoders-app.herokuapp.com/api${this.props.match.url}`)
        this.setState({users: data.users})
     
   }


   
    render(){
        const newUsers = [...this.state.users]
        
        return(
        <div className="Users">
          {newUsers.map((user, index) => {
            return (
              <Col key={index} m={3} s={6}>
                <Card
                 header={<CardTitle image= {user.avatar_url}></CardTitle>}
                  key={user._id}
                  className="black"
                  textClassName="white-text"
                  title={user.username}
                  actions={[
                    <a>Name: &nbsp; {user.name}</a>,
                    <Button
                      waves="light"
                      className='red'
                      node="a"
                      href={`/Users/${user._id}`}
                    >
                      read More
                    </Button>
                  ]}
                >
                  {/* {user.username} */}
                </Card>
              </Col>
            )
          })}
          <p>user</p>
        </div>
       
              
    )
        
        
} 

    
}
export default Users
        