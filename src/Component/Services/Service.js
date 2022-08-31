import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row ,Card, Button } from 'react-bootstrap';
import webLogo from '../../asset/image/web.svg';

export const Service = () => {
    const [data, setData]=useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/Services')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);
    const view =data.map((item)=>{
          return (<Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                      <img src={item.service_logo}/>
                      <h2 className="serviceName">{item.service_name}</h2>
                      <p className="serviceDescription">{item.service_des}</p>
                    </div>
                 </Col>
          )
    });

  return (
       <Fragment>
           <Container className="mt-5 mb-5">
               <h1 className='text-center text-primary mt-5'>Services</h1>
               <Row  className="mt-5 mb-5">
                    {view}
               </Row>
           </Container>
       </Fragment>
  )
}
