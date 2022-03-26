import React from 'react';
// import GalleryImage from './GalleryItems/GalleryImage';
// import GalleryImageData from './GalleryItems/GalleryImageData';
// import LoginForm from './LoginForm/LoginForm';
// import LoginImage from './LoginForm/LoginImage';
// import NavBar from './NavBar/NavBar';
// import NavBarImages from './NavBar/NavBarImages';

// import ProfileDetails from './ProfileDetails/ProfileDetails';
import './Instagram.css';
import Signup from './SignUp/Signup';
import SignupImage from './SignUp/SignupImage';

const Instagram = () => {
  return (
    <div className='instagram-container'>
      {/* <NavBar figures={NavBarImages} /> */}

      <div className='main'>
        {/* <ProfileDetails /> */}
        {/* <GalleryImage galleryImages={GalleryImageData} /> */}
        {/* <LoginForm loginSlides={LoginImage} /> */}
        <Signup signinSlides={SignupImage} />

        {/* <ProfileDetails /> */}
        {/* <StatusItems />
<GalleryImage />

     */}
      </div>
    </div>
  );
};

export default Instagram;
