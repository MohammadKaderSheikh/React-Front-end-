import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export default class Technology extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
componentDidMount(){
  fetch('http://127.0.0.1:8000/chartData')
  .then((res)=>res.json())
  .then((data)=>this.setState({data:data}))
}
  render() {
    var blue="rgba(0,115,230,0.8)";
    return (
      <Fragment className="mt-5">
        <Container className="mt-5">
          <h1 className="text-center mt-5 mb-5">Technology Used</h1>
          <Row className="mt-5">
            <Col lg={6} md={6} sm={12}>
               <ResponsiveContainer>
                 <BarChart width={100} height={300} data={this.state.data}>
                   <XAxis dataKey="x_data"/>
                   <Tooltip/>
                   <Bar dataKey="y_data" fill={blue}></Bar>
                 </BarChart>
               </ResponsiveContainer>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iste impedit ullam ab ipsa mollitia hic, consequatur eius eum dicta eos deleniti doloremque culpa molestiae veniam quas molestias, voluptatem ratione vero. Accusantium, doloribus iure. Debitis delectus est eius nemo iste tempora, maxime adipisci dolor velit quam numquam molestias eveniet unde amet fugit aut quas assumenda rerum. Aperiam eligendi ab ipsa quod cupiditate impedit esse sapiente minima soluta provident quasi earum odio culpa voluptatibus, veniam repudiandae blanditiis maiores quisquam sit illo cum autem! Quis, culpa veniam fugit accusantium eligendi commodi dolor eaque, expedita consequuntur enim neque aliquid temporibus blanditiis, cum explicabo.</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
