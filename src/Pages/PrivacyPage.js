import React, { Component, Fragment } from 'react'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'
import PrivacyDescription from '../Component/PrivacyDescription/PrivacyDescription'

export default class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
    
  render() {
    return (
       <Fragment>
           <PageTop pageTitle="Privacy AND Policy "></PageTop>
           <PrivacyDescription/>
           <Footer/>
       </Fragment>
    )
  }
}
