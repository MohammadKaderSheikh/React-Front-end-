import React, { Component } from 'react'
import ContactSection from '../Component/ContactSection/ContactSection'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'

export default class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <>
          <PageTop pageTitle="Contact Section "/>
          <ContactSection/>
          <Footer/>
      </>
    )
  }
}
