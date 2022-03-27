import React from 'react';
import ProfileButton from './ProfileButton';
import ProfileIcons from './ProfileIcons';
import { FaChevronDown, FaEllipsisH, FaUserCheck } from 'react-icons/fa';
import './ProfileDetails.css';
import ProfileTxt from './ProfileTxt';

const ProfileDetails = () => {
  return (
    <div className='profile-container'>
      <div className='profile-image'>
        <div className='profile-figure'>
          <img
            className='profile-user'
            style={{ borderRadius: '50%' }}
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt=''
            width='150px'
            height='150px'
          />
        </div>
      </div>

      <div className='profile'>
        <div className='profile-details'>
          <div className='title'>
            <ProfileTxt className='profile-header' text='maeve ' />
            <img
              className='verified'
              src='https://img.icons8.com/color/344/verified-badge.png'
              alt=''
              width='18'
              height='18'
            />
          </div>

          <div className='button-container'>
            <div className='profile-button'>
              <ProfileButton className='profile-btn-text' title='Message' />
            </div>

            <div className='profile-button'>
              <ProfileIcons className='user-check' icon={FaUserCheck} />
            </div>

            <div className='profile-button'>
              <ProfileIcons className='chevron-down' icon={FaChevronDown} />
            </div>
          </div>

          <div className='ellipsis-h'>
            <ProfileIcons className='ellipsis' icon={FaEllipsisH} />
          </div>
        </div>

        <div className='statistics'>
          <div className='profile-statistics'>
            <ProfileTxt className='profile-stats' entitle='165' />
            <ProfileTxt className='profile-text' title='posts' />
          </div>

          <div className='profile-statistics'>
            <ProfileTxt className='profile-stats' entitle='40.8k' />
            <ProfileTxt className='profile-text' title='followers' />
          </div>

          <div className='profile-statistics'>
            <ProfileTxt className='profile-stats' entitle='552' />
            <ProfileTxt className='profile-text' title='following' />
          </div>
        </div>

        <div className='profile-bio-container'>
          <div className='profile-name-conatainer'>
            <ProfileTxt
              className='profile-name'
              text='maeve  | Cinematic Storyteller'
            />
          </div>

          <div className='profile-occupation'>
            <ProfileTxt style={{ color: '#8E8E8E' }} entitle='Entrepreneur' />
          </div>
          {/* <br /> */}

          <div className='profile-bio'>
            <div className='profile-title'>
              <ProfileTxt entitle='🏆 Award Winning Filmmaker' />
            </div>

            <div className='profile-title'>
              <ProfileTxt entitle='📺 Co-Creator of #SWIL' />
            </div>

            <div className='profile-title'>
              <ProfileTxt entitle='👨🏾‍💻 Instagram Coach & Content Strategist' />
            </div>

            <div className='profile-title'>
              <ProfileTxt entitle='💍 Wife To @fortebrown_ 🇳🇬 ' />
            </div>
          </div>

          <div className='profile-link'>
            <a
              author_id='1455908751'
              className='heKAw'
              href='https://fontawesome.com/v5/search'
              page_id='profilePage'
              rel='me nofollow noopener noreferrer'
              target='_blank'
            >
              fontawesome.com/25-top-black-fonts-to-watch-in-2022
            </a>
          </div>

          <div className='profile-updates'>
            <ProfileTxt className='profile-followed' entitle='Followed by' />
            <div className='profile-text-conatiner'>
              <ProfileTxt
                className='profile-update-texts'
                title=' myweddingnigeria,'
              />
              <ProfileTxt
                className='profile-update-texts'
                title=' maxwelljennings,'
              />
              <ProfileTxt
                className='profile-update-texts'
                title='  bellanaijaweddings,'
              />
            </div>
            <ProfileTxt
              className='profile-followed'
              style={{ color: '#8E8E8E' }}
              entitle='+5 more'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
