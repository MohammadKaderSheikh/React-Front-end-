import React, { Component } from 'react';
import { Fragment } from 'react';
import Footer from '../Component/FooterSection/FooterSection';
import PageTop from '../Component/PageTop/PageTop';
import TermsDescription from '../Component/TermsDescription/TermsDescription';

export default class TermsPage extends Component {
  
    componentDidMount(){
        window.scroll(0,0)
      }
    
  render() {
    return (
      <Fragment>
        <PageTop pageTitle="Terms And Condition"/>
        <TermsDescription/>
        <Footer/>
      </Fragment>
    )
  }
}
