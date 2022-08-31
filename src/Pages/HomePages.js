import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import ClintReview from '../Component/ClintReview/ClintReview';
import Courses from '../Component/Courses/Courses';
import Footer from '../Component/FooterSection/FooterSection';
import RecentProject from '../Component/RecentProject/RecentProject';
import { Samary } from '../Component/SamarySection/Samary';
import { Service } from '../Component/Services/Service';
import Technology from '../Component/Technology/Technology';
import TopBanner from '../Component/TopBanner/TopBanner';

import Video from '../Component/Video/Video';


export default class HomePages extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopBanner/>
        <Service/>
        <Technology/>
        <Samary/>
        <RecentProject/>
        <Courses/>
        <Video/>
        <ClintReview/>
        <Footer/>
      </Fragment>
    )
  }
}
