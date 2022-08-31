import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
export const Samary = () => {
  return (
    <Fragment className=" samary ">
        <div className="summaryComponent p-0 mt-5">
          <Container fluid={true}className="summaryComponentOverlay">
          <Row>
               <Col lg={8} md={6} sm={12}>
                   <Row>
                       <Col className='Coutermargin'>
                           <h1 className='text-center text-white'> 
                            <CountUp start={0} end={100}>
                              {({ countUpRef, start }) => (
                            <div>
                            <span className='text-light' ref={countUpRef} />
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                            </div>
                            )}
                            </CountUp>
                        </h1>
                        <h4 className="countTitle text-white text-center">Total Clients</h4>
                       </Col>
                       <Col className="Coutermargin">
                           <h1 className='text-center text-white'> 
                            <CountUp start={0} end={100}>
                              {({ countUpRef, start }) => (
                            <div>
                            <span className='text-light' ref={countUpRef} />
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                            </div>
                            )}
                            </CountUp>
                        </h1>
                        <h4 className="countTitle text-center text-white">Total Clients</h4>  
                       </Col>
                   </Row>
               </Col>
               <Col lg={4} md={6} sm={12}>
                    <div className="SamaryCard text-center bg-light">
                        <h4 className='serviceName className="text-justify"'>how i work </h4>
                            <p className="text-justify">RequireMent Gathering </p>
                            <p className="text-justify">System Analysis </p>
                            <p className="text-justify">Coding Testing </p>
                            <p className="text-justify">Implementation</p>
                    </div>
               </Col>
            </Row>
           </Container>
        </div>
    </Fragment>
  )
}
