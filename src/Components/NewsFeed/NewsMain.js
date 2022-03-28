import { FaEllipsisH, FaCircle } from 'react-icons/fa';
import Button from './Button';
import NewsFeed from './NewsFeed';
import ImageSlides from './ImageSlides';
import NewsFeedsBar from './NewsFeedBar';
import NewsFeedButton from './NewsFeedButton';
import NewsFeedTxt from './NewsFeedTxt';
import NewsImageIcons from './NewsImageIcons';
import './NewsMain.css';
import NewsStatus from './NewsFeedNav/NewsStatus';
import NewsProfile from './NewsFeedNav/NewsProfile';

export default function NewsMain() {
  return (
    <div className='newsfeed-content'>
      <div className='newsfeed-main'>
        <div className='newsfeed-status'>
          <NewsStatus userPics={NewsProfile} />
        </div>

        <div className='newsfeed-container'>
          <div className='newsbar-container'>
            <div>
              <NewsFeedsBar />
            </div>

            <div className='ellipsis-container'>
              <NewsFeedButton icon={FaEllipsisH} className='ellipsis' />
            </div>
          </div>

          <div>
            <NewsFeed userSlides={ImageSlides} />
          </div>

          <div className='news-icons'>
            <div className='icons-btn'>
              <NewsImageIcons
                src='https://img.icons8.com/windows/344/like--v1.png'
                className='comment'
                width='24px'
                height='24px'
              />

              <NewsImageIcons
                src='https://cdn.iconscout.com/icon/free/png-128/comment-3244516-2701887.png'
                className='comment'
                width='24px'
                height='24px'
              />
              <NewsImageIcons
                src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/external-send-email-flatart-icons-outline-flatarticons.png'
                className='comment'
                width='24px'
                height='24px'
              />
            </div>

            <div className='dot-container'>
              <NewsFeedButton icon={FaCircle} className='dot' />
              <NewsFeedButton icon={FaCircle} className='dot' />
              <NewsFeedButton icon={FaCircle} className='dot' />
            </div>

            <div className='icons-btn2'>
              <NewsImageIcons
                src='https://cdn.iconscout.com/icon/free/png-128/bookmark-2358983-1970963.png'
                className='bookmark'
              />
            </div>
          </div>

          <div className='newsfeed-stat'>
            <NewsFeedTxt className='feed-stat' text='265' />
            <NewsFeedTxt className='feed-stat' title='likes' />
          </div>

          <div className='comment-container'>
            <div className='news-comment'>
              <NewsFeedTxt className='comment-txt' title='ba.beauty' />
              <NewsFeedTxt
                className='comment-txt'
                title='A random day in January'
              />
            </div>

            <NewsFeedTxt
              className='comment-txt2'
              title='View all 104 comments'
            />
            <NewsFeedTxt className='comment-txt3' title='13 hours ago' />
          </div>

          <div className='addComment-container'>
            <NewsImageIcons
              src='https://img.icons8.com/ios-glyphs/2x/happy.png'
              className='add-btn'
            />

            <div className='text'>
              <textarea
                className='addComment'
                name='add comment'
                placeholder='Add a comment...'
              ></textarea>
            </div>

            <Button className='post-btn' message='Posts' />
          </div>
        </div>
      </div>

      <div className='newsfeed-sideBar'>
        <div className='sibar-header'>
          <div className='sibar-status'>
            <NewsImageIcons
              src='https://images.unsplash.com/photo-1648406100353-75536029da32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
              className='newsImage'
            />
            <div className='sidebar-title'>
              <NewsFeedTxt className='side-comm' title='maeve' />
              <NewsFeedTxt className='side-comm2' title='maeve' />
            </div>
          </div>

          <div>
            <Button className='post-btn' message='Switch' />
          </div>
        </div>

        <div className='sibar-header'>
          <div>
            <NewsFeedTxt className='side-comm2' title='Suggestions for you' />
          </div>
          <div>
            <Button className='see-btn' message='See All' />
          </div>
        </div>

        <div className='sidebar-suggestions'>
          <div className='sibar-status'>
            <NewsImageIcons
              src='https://images.unsplash.com/photo-1648406100353-75536029da32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
              className='newsImage2'
            />
            <div className='sidebar-title'>
              <NewsFeedTxt className='side-comm' title='maeve' />
              <NewsFeedTxt className='side-comm2' title='maeve' />
            </div>
          </div>

          <div>
            <Button className='post-btn' message='Follow' />
          </div>
        </div>

        <div className='sidebar-suggestions'>
          <div className='sibar-status'>
            <NewsImageIcons
              src='https://images.unsplash.com/photo-1648406100353-75536029da32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
              className='newsImage2'
            />
            <div className='sidebar-title'>
              <NewsFeedTxt className='side-comm' title='maeve' />
              <NewsFeedTxt className='side-comm2' title='maeve' />
            </div>
          </div>

          <div>
            <Button className='post-btn' message='Follow' />
          </div>
        </div>

        <div className='sidebar-suggestions'>
          <div className='sibar-status'>
            <NewsImageIcons
              src='https://images.unsplash.com/photo-1648406100353-75536029da32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
              className='newsImage2'
            />
            <div className='sidebar-title'>
              <NewsFeedTxt className='side-comm' title='maeve' />
              <NewsFeedTxt className='side-comm2' title='maeve' />
            </div>
          </div>

          <div>
            <Button className='post-btn' message='Follow' />
          </div>
        </div>

        <div className='sidebar-suggestions'>
          <div className='sibar-status'>
            <NewsImageIcons
              src='https://images.unsplash.com/photo-1648406100353-75536029da32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
              className='newsImage2'
            />
            <div className='sidebar-title'>
              <NewsFeedTxt className='side-comm' title='maeve' />
              <NewsFeedTxt className='side-comm2' title='maeve' />
            </div>
          </div>

          <div>
            <Button className='post-btn' message='Follow' />
          </div>
        </div>

        <div className='sidebar-suggestions'>
          <div className='sibar-status'>
            <NewsImageIcons
              src='https://images.unsplash.com/photo-1648406100353-75536029da32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
              className='newsImage2'
            />
            <div className='sidebar-title'>
              <NewsFeedTxt className='side-comm' title='maeve' />
              <NewsFeedTxt className='side-comm2' title='maeve' />
            </div>
          </div>

          <div>
            <Button className='post-btn' message='Follow' />
          </div>
        </div>

        <div className='sidebar-footer'>
          <div className='sibarlist-cont'>
            <ul className='sidebar-list'>
              <li className='sd-item'>About</li>
              <li className='sd-item'>Help</li>
              <li className='sd-item'>Api</li>
              <li className='sd-item'>Jobs</li>
              <li className='sd-item'>Privacy</li>
              <li className='sd-item'>Terms</li>
            </ul>
          </div>

          <div className='sibarlist-cont'>
            <ul className='sidebar-list'>
              <li className='sd-item'>Location</li>
              <li className='sd-item'>Language</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
