import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import LoginImage from './LoginForm/LoginImage';
import NavBar from './NavBar/NavBar';
import NavBarImages from './NavBar/NavBarImages';

import ProfileDetails from './ProfileDetails/ProfileDetails';
import './Instagram.css';
import NewsMain from './NewsFeed/NewsMain';
import Signup from './SignUp/Signup';
import SignupImage from './SignUp/SignupImage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Instagram = () => {
  return (
    <div className='instagram-container'>
      <NavBar figures={NavBarImages} />

      <Router>
        <div className='main'>
          <Routes>
            <Route
              path='/LoginForm'
              element={<LoginForm loginSlides={LoginImage} />}
            />

            <Route path='/' element={<NewsMain />} />
            <Route path='/ProfileDetails' element={<ProfileDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Instagram;
