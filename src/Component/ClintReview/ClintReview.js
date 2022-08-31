import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
export default class ClintReview extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/clintReview')
        .then((res)=>res.json())
        .then((data)=>this.setState({data:data}))
    }
    
  render() {
    const myView = this.state.data.map((item)=>{
        return(
            <div>
            <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                    <img className="circleImg" src={item.clint_img}/>
                    <h1 className="serviceName">{item.clint_title}</h1>
                    <p className="serviceDescription" >{item.clint_description}</p>
                </Col>
            </Row>
        </div>
        )
    });
    var settings = {
        autoplaySpeed:3000,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 3000,
        vertical:true,
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
      <Fragment>
          
          <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                       {myView}
                    </Slider>
                </Container>
      </Fragment>
    )
  }
}
