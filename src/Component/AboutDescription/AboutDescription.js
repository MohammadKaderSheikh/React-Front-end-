import React, { Component, Fragment } from 'react'
import { Col, Container ,Row} from 'react-bootstrap'

export default class AboutDescription extends Component {
  render() {
    return (
      <Fragment>
          <Container className="mt-5">
              <Row>
                <Col sm={12} lg={12} md={12}>
                  <h1 className='serviceName'>Who i Am</h1>
                  <hr />
                  <p className='serviceDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quisquam possimus cum, labore sapiente nam porro atque consectetur doloremque voluptatum quia. Debitis sequi amet praesentium. Cum veritatis voluptatibus modi quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur minus iure voluptates cumque unde sed natus, omnis adipisci dolorum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ipsam enim sit eligendi necessitatibus reprehenderit cumque ex, ipsa rem!</p>

                  <h1 className='serviceName'>My Mission</h1>
                  <hr />
                  <p className='serviceDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quisquam possimus cum, labore sapiente nam porro atque consectetur doloremque voluptatum quia. Debitis sequi amet praesentium. Cum veritatis voluptatibus modi quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur minus iure voluptates cumque unde sed natus, omnis adipisci dolorum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ipsam enim sit eligendi necessitatibus reprehenderit cumque ex, ipsa rem!</p>

                  <h1 className='serviceName'>My Vision</h1>
                  <hr />
                  <p className='serviceDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quisquam possimus cum, labore sapiente nam porro atque consectetur doloremque voluptatum quia. Debitis sequi amet praesentium. Cum veritatis voluptatibus modi quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur minus iure voluptates cumque unde sed natus, omnis adipisci dolorum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ipsam enim sit eligendi necessitatibus reprehenderit cumque ex, ipsa rem!</p>
                </Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}
