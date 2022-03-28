import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import "react-magic-slider-dots/dist/magic-dots.css";
// import MagicSliderDots from "react-magic-slider-dots";

import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import StatusImageIcons from './StatusImageIcons';
import './StatusItems.css';
import StatusText from './StatusText';

const StatusItems = ({ reputes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,

    // appendDots: (dots) => {
    //   return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    // },

    prevArrow: (
      <StatusImageIcons icons={FaChevronCircleLeft} className='circle' />
    ),
    nextArrow: (
      <StatusImageIcons icons={FaChevronCircleRight} className='chevron' />
    ),
  };

  return (
    <>
      <div
        style={{
          // background: "green",
          width: '935px',
          marginBottom: '44px',
        }}
      >
        <Slider
          {...settings}
          style={{
            position: 'relative',
          }}
        >
          {reputes.map((reputes) => (
            <div className='slide'>
              <div className='status-image'>
                <img className='status-pic' src={reputes.image} alt='' />
              </div>

              {/* <div className="status-text"> */}
              <StatusText title={reputes.title} className='username' />
              {/* </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </>

    // {/* <div>
    //     <StatusImageIcons
    //       icons={FaChevronCircleLeft}
    //       className="circle"
    //       onClick={prevStep}
    //     />

    //     <StatusImageIcons
    //       icons={FaChevronCircleRight}
    //       className="chevron"
    //       onClick={nextStep}
    //     />
    //   </div> */}
  );
};

export default StatusItems;
