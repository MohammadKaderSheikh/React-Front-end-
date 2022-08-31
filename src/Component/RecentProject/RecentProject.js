import React, { Component, Fragment } from 'react';
import { Col, Container, Row ,Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class RecentProject extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/Project3')
    .then((res)=>res.json())
    .then((data)=>this.setState({data:data}))
  }
  render() {
    console.log(this.state.data)
    const myView=this.state.data.map((item)=>{
      return (
        <Col lg={4} md={6} sm={12}>
        <Card className="projectCard" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://img.freepik.com/free-vector/travel-app-screens-interface-design_23-2148602411.jpg?w=2000" />
           <Card.Body>
              <Card.Title className="projectCardTitle">{item.project_name}</Card.Title>
              <Card.Text className="projectCardDes">{item.short_description}</Card.Text>
              <Button className="cardButton"  variant="primary"><Link to="/ProjectDetails" ><span className="text-white">More Info</span></Link> </Button>
           </Card.Body>
          </Card>
      </Col>
      )
    });
    return (
      <Fragment>
        <Container>
            <h1 className="RecentProject text-center mt-5 text-primary">Recent Project </h1>
            <Row className="RecentProject">
             {myView}
            </Row>
        </Container>
      </Fragment>
    )
  }
}
