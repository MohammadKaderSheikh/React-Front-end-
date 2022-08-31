import React, { Component, Fragment } from 'react'
import AllProjects from '../Component/AllProject/AllProject'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'

export default class PortfolioPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
          <PageTop pageTitle="Protfolio Pages "/>
          <AllProjects/>
          <Footer/>
      </Fragment>
    )
  }
}
