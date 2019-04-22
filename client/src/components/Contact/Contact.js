import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Jumbotron } from 'reactstrap';
import axios from 'axios';
import image from '../img/nature1.jpg'
import { Spring } from  'react-spring/renderprops';
import './Contact.css';


const tileData = [
    {
      img: image,
      title: 'Holder Title',
      author: 'Christine Photography',
    },
     {
        img: image,
        title: 'Holder Title',
        author: 'Christine Photography',
     },
     {
        img: image,
        title: 'Holder Title',
        author: 'Christine Photography',
      },
      {
        img: image,
        title: 'Holder Title',
        author: 'Christine Photography',
      },
      {
        img: image,
        title: 'Holder Title',
        author: 'Christine Photography',
      },
   ];

class Contact extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  async handleSubmit(e) {
    e.preventDefault()

    const {name, email, message} = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

  render() {
      
    return (
      <div>
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
          {/* Jumbotron */}
          <Spring
                from={{ opacity:0}}
                to={{opacity: 1}}
                config={{ delay: 1000, duration:1000 }}
                >
                { props => (
                <div style={props}>
                {/* Insert below */}

                <Jumbotron fluid style={{ backgroundColor:'#66fcf1' }}>
                            <Container fluid>
                                <p className="display-3" style={{ color: '#1f2833', fontFamily: 'Julius Sans One, sans-serif', textAlign:'center', fontSize:'25px'  }} >Schedule a Shoot</p>
                            </Container>
                        </Jumbotron>
                </div>
                ) }
                </Spring>
          </div>
          </div>
          </div>
          <div className="container">
          <div className="row">
          <div className="col-sm-6">
          <Spring
                from={{ opacity:0}}
                to={{opacity: 1}}
                config={{ delay: 1500, duration:1000 }}
                >
                { props => (
                <div style={props}>
                {/* Insert below */}

               <Form onSubmit={this.handleSubmit} style={{ }} >
          <FormGroup>
            <Label for="name" style={{ color: '#c5c6c7', fontFamily: 'Julius Sans One, sans-serif'  }}>Name: </Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email" style={{ color: '#c5c6c7', fontFamily: 'Julius Sans One, sans-serif'  }} >Email: </Label>
            <Input
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="message" style={{ color: '#c5c6c7', fontFamily: 'Julius Sans One, sans-serif'  }} >Message: </Label>
            <Input
              type="textarea"
              name="message"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button style={{ color: '#c5c6c7', fontFamily: 'Julius Sans One, sans-serif', display:'inlineBlock', backgroundColor:'#0b0c10'  }} >Submit</Button>
        </Form>
                </div>
                ) }
                </Spring>
          </div>
          <br/>
          <div className="col-sm-6">
          <Spring
                from={{ opacity:0}}
                to={{opacity: 1}}
                config={{ delay: 1500, duration:1000 }}
                >
                { props => (
                <div style={props}>
                {/* Insert below */}

                <img src={image} alt="Photo" className="contactImg"/>
                </div>
                ) }
                </Spring>
          </div>
          </div>
          </div>

          
       
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
      </div>
    );
  }
}

export default Contact;
