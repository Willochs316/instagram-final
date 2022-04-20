/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from 'react';
import Svgs from '../../assets/svgs';
import axios from 'axios';
import './PostModal.css';

const PostModal = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [fileUrl, setFileUrl] = useState(null);

  const fileUpload = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    const convertFileToUrl = URL.createObjectURL(event.target.files[0]);
    setFileUrl(convertFileToUrl);
  };

  const handleFileUploads = async (event) => {
    event.preventDefault();
    console.log(fileUpload.current.click(), 'fileUpload');

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

  return (
    <>
      <form className='modal-body'>
        <div className='modal-container'>
          <div className='modal-header'>
            <h2 className='modal-head'>Create new post</h2>
          </div>

          {fileUrl ? (
            <div className='modal-content'>
              <img className='image-content' src={fileUrl} alt='image-upload' />
            </div>
          ) : (
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
          )}
        </div>
      </form>
    </>
  );
};

export default PostModal;
