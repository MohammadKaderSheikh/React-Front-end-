import React, { Component, Fragment } from 'react'
import CourseDetails from '../Component/CourseDetails/CourseDetails'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'

export default class CourseDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
    
  render() {
    return (
       <Fragment>
           <PageTop/>
           <CourseDetails/>
           <Footer/>
       </Fragment>
    )
  }
}
