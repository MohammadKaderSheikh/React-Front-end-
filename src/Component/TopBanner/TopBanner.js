
import { Col, Container, Row ,Button } from 'react-bootstrap';
import '../../asset/css/bootstrap.min.css'
import NavSection from '../Navbar/navbar';
import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const TopBanner = () => {
   const [data,setData]=useState([]);

   useEffect(()=>{
        fetch('http://127.0.0.1:8000/HomeTopTitle')
        .then((res)=>res.json())
        .then((data)=>setData(data))
   },[])

// const myView =<h1>{data[0].home_title}</h1>;
 const view = data.map((item)=>{
   return <>
          <h1 className='topTitle'>{item.home_title}</h1>
          <h4 className='topSubTitle'>{item.home_subtitle} </h4>
         </>
 })
  console.log(data)
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
            <div className='topBannerOverlay'>
            <NavSection/>
            <Container className="mt-5">
              <Row className='mt-5'>
                  <Col className='text-center content mt-5'>
                   {view}
                   <Button variant="primary">More Info</Button>
                  </Col>
              </Row>
            </Container>
            </div>
        </Container>
    
      </Fragment>
    )
  
}
export default TopBanner;