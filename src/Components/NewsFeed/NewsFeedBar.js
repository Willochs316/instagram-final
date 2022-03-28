import NewsImageIcons from './NewsImageIcons';
import './NewsFeed.css';
import NewsFeedTxt from './NewsFeedTxt';

const NewsFeedBar = () => {
  return (
    <div className='img-container'>
      <div className='newsbar-image'>
        <NewsImageIcons
          src='https://images.unsplash.com/photo-1633423009154-39c7c175e165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
          className='news-image'
        />
      </div>
      <div className='txt'>
        <NewsFeedTxt className='news-txt' title='ba.beauty' />
      </div>
    </div>
  );
};

export default NewsFeedBar;
