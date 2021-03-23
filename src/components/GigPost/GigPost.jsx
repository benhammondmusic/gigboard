import { useEffect } from 'react';
import { useState } from 'react';
import GigPreview from '../GigPreview/GigPreview';
import GigFull from '../GigFull/GigFull';
import './GigPost.css';

const GigPost = ({ gig, currentUserId }) => {
  const [previewMode, setPreviewMode] = useState('false');

  const togglePreview = () => {
    setPreviewMode(!previewMode); // set to opposite of current previewMode state
  };

  useEffect(() => {
    // run this on page load
  }, []);

  return (
    <>
      {previewMode ? (
        <li onClick={togglePreview}>
          <div className="preview-container post-container">
            <GigPreview gig={gig} />
          </div>
        </li>
      ) : (
        <li onClick={togglePreview}>
          <div className="full-container post-container">
            <GigFull gig={gig} currentUserId={currentUserId} />
          </div>
        </li>
      )}
    </>
  );
};

export default GigPost;
