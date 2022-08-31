import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class AllProjects extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/ProjectAll')
        .then((res)=>res.json())
        .then((data)=>this.setState({data:data}))
    }
    render() {
        const myView =this.state.data.map((item)=>{
            return(
                <Col sm={12} md={6} lg={4} className="p-2">
                <Card className="projectCard">
                    <Card.Img variant="top" src={item.img_one} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">{item.project_name}</Card.Title>
                        <Card.Text className="projectCardDes">{item.hort_description}</Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
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

export default AllProjects;