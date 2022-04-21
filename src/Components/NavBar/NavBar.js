import './NavBar.css';
import NavBarIcons from './NavBarIcons';
import { FaRegCompass, FaSearch } from 'react-icons/fa';
import Input from './Input';
import Svgs from '../../assets/svgs';
import { useState } from 'react';
import PostModal from '../Modal/PostModal';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const NavBar = ({ figures }) => {
  const [modal, setModal] = useState(false);

  const userFigures = (userId) => {
    const existingFigures = figures.filter((figure) => figure.id === userId);
    return existingFigures;
  };

  const handleToggle = () => {
    setModal(true);
  };

  return (
    <div className='navigation-container'>
      <div className='navigation-bar'>
        <div className='navigation-image'>
          <img
            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
            alt=''
            width='103'
            height='29'
          />
        </div>

        <div className='search-input-container'>
          <div className='FaSearch'>
            <NavBarIcons icon={FaSearch} className='fa-search' />
          </div>

          <Input
            type='text'
            name='text'
            className='navigation-input'
            placeholder='Search'
          />
        </div>

        <div className='icons-container'>
          <div className='upload-icon'>
            <Svgs.HomeUploadIcon className='icons' />
          </div>

          <div className='upload-icon'>
            <Svgs.SendUploadIcon className='icons' />
          </div>

          <div className='upload-icon'>
            <Svgs.PlusUploadIcon className='icons' onClick={handleToggle} />
          </div>

          <PostModal setModal={setModal} show={modal} />

          <div className='upload-icon'>
            <Svgs.CompassUploadIcon className='icons' />
          </div>

          <div className='upload-icon'>
            <Svgs.LoveUploadIcon className='icons' />
          </div>

          {userFigures(5).map((figure) => (
            <div className='profile-fig'>
              <img
                src={figure.image}
                alt=''
                width='24'
                height='24'
                style={{
                  borderRadius: '50%',
                  border: '1px solid #dbdbdb',
                  marginLeft: '22px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
