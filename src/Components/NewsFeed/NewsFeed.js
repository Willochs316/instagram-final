import React, { useEffect, useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import NewsFeedButton from './NewsFeedButton';
import './NewsFeed.css';

const NewsFeed = ({ userSlides }) => {
  const [current, setCurrent] = useState(0);

  //destructure  userSlides.lenght to get const { lenght } = userSlides;

  const prevStep = () => {
    setCurrent(current === 0 ? userSlides.length - 1 : current - 1);
  };

  const nextStep = () => {
    setCurrent(current === userSlides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(nextStep, 3000);
  }, [userSlides]);

  // useEffect(() => {
  //   setTimeout(() => setCurrent(current + 1), 1000);
  // }, [userSlides]);

  if (!Array.isArray(userSlides) || userSlides.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      {userSlides.map((userSlide, index) => (
        <div
          style={{ display: index === current ? 'flex' : 'none' }}
          className={index === current ? 'userSlide active' : 'userSlide'}
          key={index}
        >
          <img
            className='newsfeed-image'
            src={userSlide.image}
            alt=''
            style={{ width: '614px', height: '614px', objectFit: 'cover' }}
          />
          <NewsFeedButton
            icon={FaChevronCircleLeft}
            className='circle'
            onClick={prevStep}
          />
          <NewsFeedButton
            icon={FaChevronCircleRight}
            className='chevron'
            onClick={nextStep}
          />
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;

// className={index === current ? "slide active" : "slide"}
