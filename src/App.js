import { Fragment } from 'react';
import AboutDescription from './Component/AboutDescription/AboutDescription';
import AllCourses from './Component/AllCourses/AllCourses';
import ClintReview from './Component/ClintReview/ClintReview';
import ContactSection from './Component/ContactSection/ContactSection';
import Courses from './Component/Courses/Courses';
import Footer from './Component/FooterSection/FooterSection';
import { NavSection } from './Component/Navbar/navbar';
import PageTop from './Component/PageTop/PageTop';
import RecentProject from './Component/RecentProject/RecentProject';
import { Samary } from './Component/SamarySection/Samary';
import { Service } from './Component/Services/Service';
import Technology from './Component/Technology/Technology';
import { TopBanner } from './Component/TopBanner/TopBanner';
import Video from './Component/Video/Video';
import AboutPage from './Pages/AboutPage';
import AllCoursePage from './Pages/AllCoursePage';
import ContactPage from './Pages/ContactPage';
import HomePages from './Pages/HomePages';
import PortfolioPage from './Pages/PortfolioPage';
import ServicePage from './Pages/ServicePage';
import AppRoute from './Route/AppRoute';



function App() {
  return (
    <Fragment>
        <AppRoute/>
    </Fragment>
  );
}

export default App;
