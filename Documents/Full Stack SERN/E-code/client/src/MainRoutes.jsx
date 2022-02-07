import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Course from './components/course/Course'
import Trainers from './components/trainers/Trainers'
import Profile from './components/profile/Profile'
import CourseView from './components/course/CourseView'
import {Routes , Route} from 'react-router-dom'

function MainRoutes() {
  return <>
      <Navbar />
      <div>
      <Routes>
            <Route exact path = '/' element = {<Home />} />
            <Route exact path = '/course' element = {<Course />} />
            <Route exact path = '/courseview' element = {<CourseView />} />
            <Route exact path = '/trainer' element = {<Trainers />} />
            <Route exact path = '/profile' element = {<Profile />} />
    </Routes>
      </div>
  </>;
}

export default MainRoutes;
