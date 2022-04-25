import React, { useRef, useState } from 'react';
import './Next.css';
import Svgs from '../../assets/svgs';
import Button from './Button';
import Text from './Text';

const NextModal = ({ modals }) => {
  const [fileUrl, setFileUrl] = useState(null);

  const userModalImages = (userId) => {
    const existingModalImages = modals.filter((modal) => modal.id === userId);
    return existingModalImages;
  };

  const handleClose = () => {};

  const onBackButtonClick = () => {};
  return (
    <>
      <div className='modal_next-body'>
        <div className='close-icon'>
          <Svgs.CloseUploadIcon onClick={handleClose} />
        </div>

        <form className='modal_next-content'>
          <div className='modal_next-header'>
            <div className='back-container'>
              <Svgs.BackUploadIcon
                className='back-icon'
                onClick={onBackButtonClick}
              />
            </div>

            <div className='next-container'>
              <Button className='next-text' title='Edit' />
            </div>

            <div className='next-container'>
              <Button className='next-text' title='Next' />
            </div>
          </div>

          <div className='filter-container'>
            <img className='image-content' src={fileUrl} alt='image-upload' />

            <div className='filter_adjustments-container'>
              <div className='modal-filter'>
                <Text className='filter' title='Filter' />
                <Text className='adjustment' title='Adjustments' />
              </div>

              <div className='modal_filter-adjustments'>
                <div className='filter-image'>
                  {userModalImages(0).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Original' />
                </div>

                <div className='filter-image'>
                  {userModalImages(1).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Clarendon' />
                </div>

                <div className='filter-image'>
                  {userModalImages(2).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Gingham' />
                </div>

                <div className='filter-image'>
                  {userModalImages(3).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Gingham' />
                </div>

                <div className='filter-image'>
                  {userModalImages(4).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Lark' />
                </div>

                <div className='filter-image'>
                  {userModalImages(5).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Reyes' />
                </div>

                <div className='filter-image'>
                  {userModalImages(6).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Juno' />
                </div>

                <div className='filter-image'>
                  {userModalImages(7).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Slumber' />
                </div>

                <div className='filter-image'>
                  {userModalImages(8).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Crema' />
                </div>

                <div className='filter-image'>
                  {userModalImages(9).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Ludwig' />
                </div>

                <div className='filter-image'>
                  {userModalImages(10).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Aden' />
                </div>

                <div className='filter-image'>
                  {userModalImages(11).map((modal) => (
                    <img src={modal.image} className='modal-image' alt='' />
                  ))}
                  <Text className='' title='Aden' />
                </div>
              </div>

              <div className='range-container'>
                <input class='range-input' type='range' value='100'></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NextModal;
