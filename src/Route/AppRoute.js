import React, { Component, Fragment } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AboutPage from '../Pages/AboutPage';
import AllCoursePage from '../Pages/AllCoursePage';
import ContactPage from '../Pages/ContactPage';
import CourseDetailsPage from '../Pages/CourseDetailsPage';
import HomePages from '../Pages/HomePages';
import PortfolioPage from '../Pages/PortfolioPage';
import PrivacyPage from '../Pages/PrivacyPage';
import ProjectDetailsPage from '../Pages/ProjectDetailsPage';
import RefundPage from '../Pages/RefundPage';
import ServicePage from '../Pages/ServicePage';
import TermsPage from '../Pages/TermsPage';
export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
           <Routes>
                <Route path='/' element={<HomePages/>}/>
                <Route path='/About' element={<AboutPage/>}/>
                <Route path='/course' element={<AllCoursePage/>}/>
                <Route path='/Contact' element={<ContactPage/>}/>
                <Route path='/Portfolio' element={<PortfolioPage/>}/>
                <Route path='/service' element={<ServicePage/>}/>
                <Route path='/Refund' element={<RefundPage/>}/>
                <Route path='/TermsPage' element={<TermsPage/>}/>
                <Route path='/Privacy' element={<PrivacyPage/>}/>
                <Route path='/ProjectDetails' element={<ProjectDetailsPage/>}/>
                <Route path='/CourseDetails' element={<CourseDetailsPage/>}/>
           </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }
}
