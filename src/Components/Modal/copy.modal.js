/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from 'react';
import Svgs from '../../assets/svgs';

const Copy = ({ show, fileUrl, isFileUrl, setIsFileUrl }) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');

  const fileUpload = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    const convertFileToUrl = URL.createObjectURL(event.target.files[0]);
    setIsFileUrl(convertFileToUrl);
  };

  const handleFileUploads = (event) => {
    event.preventDefault();
    console.log(fileUpload.current.click(), 'fileUpload');
  };

  return (
    <>
      {!isFileUrl ? (
        <div>
          {show ? (
            <div className='copy-modal'>
              <div className='copy-image-body'>
                <img className='copy-image' src={fileUrl} alt='image-upload' />
              </div>

              <div>
                <input
                  type='file'
                  ref={fileUpload}
                  className='custom-file-input'
                  id='customFile'
                  onChange={handleFileChange}
                />
                <div className='plus-container'>
                  <Svgs.CopyPlusUploadIcon onClick={handleFileUploads} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className='copy-modal2'>
          <div className='copy-image-body'>
            <img className='copy-image' src={fileUrl} alt='image-upload' />
          </div>

          <div className='copy-image-body'>
            <img className='copy-image' src={isFileUrl} alt='image-upload' />
          </div>

          <div>
            <input
              type='file'
              ref={fileUpload}
              className='custom-file-input'
              id='customFile'
              onChange={handleFileChange}
            />
            <div className='plus-container'>
              <Svgs.CopyPlusUploadIcon onClick={handleFileUploads} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Copy;
