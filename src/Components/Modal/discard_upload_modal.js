import './discard_upload.css';

const Discard = ({ onDicard, onClose }) => {
  const handleCancel = () => {
    onClose();
  };

  const handleDiscard = () => {
    onDicard?.();
  };

  return (
    <>
      <div className='discard_upload-container'>
        <div className='discard_header'>
          <h3 className='discard_header-text'>Discard post?</h3>
          <p className='discard_header-title'>
            If you leave, your edits won't be saved.
          </p>
        </div>

        <div className='discard_main'>
          <button className='discard-btn' onClick={handleDiscard}>
            Discard
          </button>
        </div>

        <button className='cancel-btn' onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default Discard;
