import { FaHeart, FaComment } from 'react-icons/fa';
import './GalleryImage.css';
import GalleryImageIcons from './GalleryImageIcons';
import GalleryImageText from './GalleryImageText';

const GalleryImage = ({ galleryImages }) => {
  const userImages = (userId) => {
    const existingImages = galleryImages.filter(
      (galleryImage) => galleryImage.id === userId
    );
    return existingImages;
  };

  return (
    <div className='gallery-container'>
      <div className='gallery-image'>
        {userImages(1).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(2).map((galleryImage) => (
            <img src={galleryImage.image} className='reel' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='703' />
          </div>

          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='160' />
          </div>
        </div>
      </div>

      <div className='gallery-image'>
        {userImages(3).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(2).map((galleryImage) => (
            <img src={galleryImage.image} className='reel' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='765' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='200' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(4).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(0).map((galleryImage) => (
            <img src={galleryImage.image} className='copy' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='513' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='150' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(5).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(0).map((galleryImage) => (
            <img src={galleryImage.image} className='copy' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='603' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='220' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(6).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(2).map((galleryImage) => (
            <img src={galleryImage.image} className='reel' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='714' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='250' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(7).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(0).map((galleryImage) => (
            <img src={galleryImage.image} className='copy' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='474' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='109' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(8).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(2).map((galleryImage) => (
            <img src={galleryImage.image} className='reel' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='341' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='120' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(9).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(0).map((galleryImage) => (
            <img src={galleryImage.image} className='copy' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='565' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='150' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(10).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(2).map((galleryImage) => (
            <img src={galleryImage.image} className='reel' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='691' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='300' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(11).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(0).map((galleryImage) => (
            <img src={galleryImage.image} className='copy' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='665' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='130' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(12).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(2).map((galleryImage) => (
            <img src={galleryImage.image} className='reel' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='765' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='200' />
          </div>
        </div>
      </div>
      <div className='gallery-image'>
        {userImages(14).map((galleryImage) => (
          <img src={galleryImage.image} className='image' alt='' />
        ))}

        <div className='reel-icon'>
          {userImages(0).map((galleryImage) => (
            <img src={galleryImage.image} className='reel' alt='' />
          ))}
        </div>

        <div className='gallery-items'>
          <div className='gallery-likes'>
            <GalleryImageIcons icons={FaHeart} className='fa-heart' />
            <GalleryImageText title='682' />
          </div>
          <div className='gallery-comments'>
            <GalleryImageIcons icons={FaComment} className='fa-comment' />
            <GalleryImageText title='205' />
          </div>
        </div>
      </div>

      <></>
    </div>
  );
};

export default GalleryImage;
