import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import AllCourses from '../Component/AllCourses/AllCourses'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'

export default class AllCoursePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
     <Fragment>
         <PageTop pageTitle="All Courses"/>
         <AllCourses/>
         <Footer/>
     </Fragment>
    )
  }
}
