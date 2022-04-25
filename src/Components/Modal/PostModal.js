/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from 'react';
import Copy from './copy.modal';
import Svgs from '../../assets/svgs';

import axios from 'axios';
import './PostModal.css';
import Discard from './discard_upload_modal';

const PostModal = ({ show, setModal }) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [fileUrl, setFileUrl] = useState(null);
  const [copyModal, setcopyModal] = useState(false);
  const [showBackModal, setShowBackModal] = useState(false);
  const [isColor, setIsColor] = useState(null);
  const [isFileUrl, setIsFileUrl] = useState(null);

  const fileUpload = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    const convertFileToUrl = URL.createObjectURL(event.target.files[0]);
    setFileUrl(convertFileToUrl);
  };

  const handleFileUploads = async (event) => {
    console.log(fileUpload.current.click());
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (error) {
      if (error.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(error.response.data.message);
      }
    }
  };

  const handleClose = () => {
    setModal(false);
    setFileUrl(false);
    setcopyModal(false);
    setShowBackModal(false);
  };

  const handleCopyToggle = () => {
    setcopyModal(true);
    setIsColor({
      backgroundColor: 'rgb(123, 130, 118, 0.5)',
    });
    setIsFileUrl(null);
  };

  // user clicks back arrow => what happens?: I want to show discard modal, if the user has a picture
  const onBackButtonClick = () => {
    setShowBackModal(true);
  };

  // user clicks discard buttons => what happens?:the picture is removed and user can select another picture, and close showBackModal
  const onDiscardFile = () => {
    setFileUrl(null);
    setShowBackModal(false);
  };

  const cancelCourseFile = () => {
    setShowBackModal(false);
  };

  return (
    <>
      {show ? (
        <div className='modal-body'>
          <div className='close-icon'>
            <Svgs.CloseUploadIcon onClick={handleClose} />
          </div>

          <form className='modal-container'>
            {fileUrl ? (
              <div className='modal-content'>
                <div className='modal-header'>
                  <div className='back-container'>
                    <Svgs.BackUploadIcon
                      className='back-icon'
                      onClick={onBackButtonClick}
                    />
                  </div>

                  <div className='head-container'>
                    <h2 className='modal-head'>Crop</h2>
                  </div>

                  <div className='next-container'>
                    <button className='next-text'>Next</button>
                  </div>
                </div>

                <img
                  className='image-content'
                  src={fileUrl}
                  alt='image-upload'
                />

                <div className='copy-container' style={isColor}>
                  <Svgs.CopyUploadIcon onClick={handleCopyToggle} />
                </div>

                <div className='copy-contents'>
                  <Copy
                    show={copyModal}
                    fileUrl={fileUrl}
                    isFileUrl={isFileUrl}
                    setIsFileUrl={setIsFileUrl}
                    setFileUrl={setFileUrl}
                  />
                </div>
              </div>
            ) : (
              <div className='modal-main'>
                <div className='modal-header2'>
                  <h2 className='modal-head'>Create new post</h2>
                </div>
                <div className='modal-file'>
                  <div className='modal-image'>
                    <Svgs.ImageUploadIcon />
                  </div>

                  <div className='modal-title'>
                    <p className='modal-text'>Drag photos and videos here</p>
                  </div>

                  <div className='modal-button'>
                    <input
                      type='file'
                      ref={fileUpload}
                      className='custom-file-input'
                      id='customFile'
                      onChange={handleFileChange}
                    />
                    <button className='modal-btn' onClick={handleFileUploads}>
                      Select from computer
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : null}

      {showBackModal ? (
        <Discard onDicard={onDiscardFile} onClose={cancelCourseFile} />
      ) : null}
    </>
  );
};

export default PostModal;
