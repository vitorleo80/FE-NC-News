import React, { Component } from "react"
import { Row, Input } from "react-materialize"
import { postArticle } from "../../utils"
import "./PostArticle.css"


class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: ""
  }

  render() {
    const { topic, title, body } = this.state
    return (
      <div>
        <h4>You are submitting a text-based post. Speak your mind. A title is required, but expanding further in the text field is not. </h4>
        <Row className="postpagebox">
        <div className="formbox">
        <Input 
            placeholder="Insert your title" 
            required
            type="text"
            id="inputTitle3"
            s={10} label="Article Title" 
            value={title}
            onChange={event => this.handleFormInput(event, "title")}
            />
        <Input s={10} type='select'
               label="Select your Topic" 
               onChange={this.handleTopicSelect}
               value={topic}
               
               
               >
        <option value='1'></option>
        <option value='coding'>coding</option>
        <option value='football'>football</option>
        <option value='cooking'>cooking</option>
        </Input>
        <Input className="bodyinput"
               type='textarea' s={10}
               placeholder="Write your Article" 
               value={body}
               onChange={event => this.handleFormInput(event, "body")}
               id="exampleFormControlTextarea1"
               />
        <button className="btn waves-effect waves-light"
                type="submit" 
                name="action"
                ref="submit"
                onClick={this.handleSubmit}
                > Add Article
         <i className="material-icons right">send</i>
        </button>
        </div>
    </Row>
    </div>
    )
  }
                

  handleFormInput = (event, form) => {
    this.setState({ [form]: event.target.value });
  };

  handleTopicSelect = event => {
    this.setState({ topic: event.target.value.toLowerCase() });
  };

  handleSubmit = () => {
    const { title, body, topic} = this.state
    const {user} = this.props
    if (title && body) {
      postArticle(title, body, topic, user)
      this.setState({
        title: "",
        body: "",
        topic: ""
      })
      }
    }
    
  }




export default PostArticle
              
             


              
