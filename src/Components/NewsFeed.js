import React from 'react';
import './NewsFeed.css';

const newsFeed = () => {
  return (
    <>
      <div className='news-container'>
        <div className='div-container'>
          <div className='img-container'>
            <div>
              <img
                className='news-image'
                src='https://images.unsplash.com/photo-1455642305367-68834a1da7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                alt=''
                width='32'
              />
            </div>

            <div className='txt'>
              <p className='news-txt'>willochs</p>
              <p className='news-txt'>willochs</p>
            </div>
          </div>

          <button className='new-btn'>
            <i class='fas fa-ellipsis-h'></i>
          </button>
        </div>

        <div className='div-profile'>
          <div className='profile'>
            <img
              src='https://images.unsplash.com/photo-1549232835-f429cbf5fc80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5MzQ4Njc4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
              alt=''
              width='614px'
              height='614px'
            />
            <button aria-label='Next' className='next'>
              <i class='fas fa-chevron-circle-right'></i>
            </button>
          </div>
        </div>

        <div className='news-icons'>
          <div className='icons-btn'>
            <i class='far fa-heart'></i>

            <img
              className='comment'
              src='https://cdn.iconscout.com/icon/free/png-128/comment-3244516-2701887.png'
              alt=''
              width='24'
              height='24'
            />

            <img
              className='comment'
              src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/external-send-email-flatart-icons-outline-flatarticons.png'
              alt=''
              width='40'
              height='40'
            />
          </div>

          <div className='dot-container'>
            <span class='dot' onclick='currentSlide(1)'></span>
            <span class='dot' onclick='currentSlide(2)'></span>
            <span class='dot' onclick='currentSlide(3)'></span>
          </div>

          <div className='icons-btn2'>
            <img
              src='https://cdn.iconscout.com/icon/free/png-128/bookmark-2358983-1970963.png'
              alt=''
              width='24'
              height='24'
            />
          </div>
        </div>

        <div className='newsfeed-stat'>
          <p className='feed-stat'>
            <span>265</span> likes
          </p>
        </div>

        <div className='comment-container'>
          <p className='comment-txt'>
            willochs <span className='comment'>A random night in january</span>
          </p>

          <p className='comment-txt2'>View all 104 comments</p>
          <p className='comment-txt3'>13 hours ago</p>
        </div>

        <div className='addComment-container'>
          <div>
            <button class='add-btn' type='button'>
              <div class='add-btn'>
                <svg
                  aria-label='Emoji'
                  class='_8-yf5 '
                  color='#262626'
                  fill='#262626'
                  height='24'
                  role='img'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <path d='M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z'></path>
                </svg>
              </div>
            </button>
          </div>

          <div className='text'>
            <textarea
              className='addComment'
              name='add comment'
              placeholder='Add a comment...'
            ></textarea>
          </div>

          <button className='post-btn'>Posts</button>
        </div>
      </div>
    </>
  );
};

export default newsFeed;


