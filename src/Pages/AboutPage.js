import React, { Component, Fragment } from 'react';
import AboutDescription from '../Component/AboutDescription/AboutDescription';
import Footer from '../Component/FooterSection/FooterSection';
import PageTop from '../Component/PageTop/PageTop'
import { TopBanner } from '../Component/TopBanner/TopBanner'

export default class AboutPage extends Component {
  
  componentDidMount(){
    window.scroll(0,0)
  }


  render() {
    return (
     <Fragment>
         <PageTop pageTitle="About Me"/>
         <AboutDescription/>
         <Footer/>
     </Fragment>
    )
  }
}
