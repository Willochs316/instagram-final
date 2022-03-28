import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import NewsFeedTxt from '../NewsFeedTxt';
import './NewsFeedNav.css';

const NewsStatus = ({ userPics }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        style={{
          // background: "green",

          marginBottom: '44px',
        }}
      >
        <Slider
          className='news-slider'
          {...settings}
          style={{
            position: 'relative',
          }}
        >
          {userPics.map((userPic) => (
            <div className='slide-status'>
              <div className='news-img'>
                <img className='news-figures' src={userPic.image} alt='' />
              </div>

              {/* <div className="status-text"> */}
              <NewsFeedTxt title={userPic.title} className='username-news' />
              {/* </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewsStatus;
