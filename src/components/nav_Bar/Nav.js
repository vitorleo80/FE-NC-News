import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Navbar } from "react-materialize"
import "./Nav.css"


class Nav extends Component {
    render(){
        return (
            <div>
            <Navbar className="navbar" left>
              <li>
                <NavLink to="/"><p>Main</p></NavLink>
              </li>
              <li>
                <NavLink to="/articles"><p>Articles</p></NavLink>
              </li>
              <li>
                <NavLink to="/topics"><p>Topics</p></NavLink>
              </li>
              <li>
                <NavLink to="/users"><p>Users</p></NavLink>
              </li>
            </Navbar>
            </div>
          )
        } 
}

export default Nav


