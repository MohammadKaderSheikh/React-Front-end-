import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AllCourses extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    componentDidMount(){
          fetch('http://127.0.0.1:8000/CourseAll')
          .then((res)=>res.json())
          .then((data)=>this.setState({data:data}))
    }
    render() {
        console.log(this.state.data)
        const myView = this.state.data.map((item)=>{
             return(
                <Col lg={6} md={12} sm={12} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src={item.small_image}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="text-justify courseTitle">{item.short_title}</h5>
                            <p className="text-justify courseDes">{item.short_description}</p>
                            <a className="courseDetails float-left" href="#">Details</a>
                        </Col>
                    </Row>
                </Col>
             )
            });
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                     {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;