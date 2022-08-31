import React, { Component, Fragment } from 'react'
import Footer from '../Component/FooterSection/FooterSection'
import PageTop from '../Component/PageTop/PageTop'
import ProjectDetails from '../Component/ProjectDetails/ProjectDetails'

export default class ProjectDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
         <PageTop pageTitle="Project Details"/>
         <ProjectDetails/>
         <Footer/>

      </Fragment>
    )
  }
}
