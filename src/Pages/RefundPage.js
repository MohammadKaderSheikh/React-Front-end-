import React, { Component, Fragment } from 'react'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'
import RefundSection from '../Component/RefunPolicy/RefundSection'

export default class RefundPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
     <Fragment>
        <PageTop pageTitle="Refund policy"/>
        <RefundSection/>
        <Footer/>
     </Fragment>
    )
  }
}
