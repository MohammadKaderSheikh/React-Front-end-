import React, { Component, Fragment } from 'react'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'
import { Service } from '../Component/Services/Service'

export default class ServicePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
          <PageTop pageTitle="My Services"/>
          <Service/>
          <Footer/>
      </Fragment>
    )
  }
}
