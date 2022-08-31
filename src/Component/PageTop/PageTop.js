import React, { Component, Fragment } from 'react';
import { Col, Container, Row ,Button } from 'react-bootstrap';
import NavSection from '../Navbar/navbar';
export default class PageTop extends Component {
  render() {
    return (
      <Fragment>
            <Container fluid={true} className="topFixedPage p-0">
            <div className='topPageOverlay'>
                 <NavSection/>
                <Container className="mt-5">
                    <Row className='mt-5'>
                         <Col className='text-center content mt-5'>
                            <h4 className='topSubTitle'>{this.props.pageTitle} </h4>
     
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </Fragment>
    )
  }
}
