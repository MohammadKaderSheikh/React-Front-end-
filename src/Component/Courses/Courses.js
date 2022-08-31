import React, { Component, Fragment } from 'react'
import {Col, Container,Button, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Courses extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/CourseHome')
        .then((res)=>res.json())
        .then((data)=>this.setState({data:data}))
    }
  render() {
    const myView= this.state.data.map((item)=>{
        return  <Col lg={6} md={12} sm={12} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src={item.small_image}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="text-justify courseTitle">{item.short_title}</h5>
                            <p className="text-justify courseDes">{item.short_description}</p>
                            <Button variant="primary"><Link to="/CourseDetails"><span className="text-white">More Info</span></Link> </Button>
                        </Col>
                    </Row>
                </Col>
    });
    return (
      <Fragment>
           <Container className="text-center mt-5">
                        <h1 className="serviceMainTitle text-primary m-5">OUR COURSES</h1>
                        <Row>
                           {myView}
                        </Row>
                    </Container>
      </Fragment>
    )
  }
}
