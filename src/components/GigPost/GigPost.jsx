import { useEffect } from 'react';
import { useState } from 'react';
import GigPreview from '../GigPreview/GigPreview';
import GigFull from '../GigFull/GigFull';
import './GigPost.css';

const GigPost = ({ gig, currentUserId }) => {
  const [previewMode, setPreviewMode] = useState('false');

  const togglePreview = () => {
    setPreviewMode(!previewMode); // set to opposite of current previewmode state
  };

  useEffect(() => {
    // run this on page load
  }, []);

  return (
    <>
      {previewMode ? (
        <li onClick={togglePreview}>
          <div className="reg-container">
            <GigPreview gig={gig} />
          </div>
        </li>
      ) : (
        <li onClick={togglePreview}>
          <div className="reg-container">
            <GigFull gig={gig} currentUserId={currentUserId} />
          </div>
        </li>
      )}
    </>
  );
};

export default GigPost;
