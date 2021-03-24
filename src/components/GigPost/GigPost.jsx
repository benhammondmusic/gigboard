import { useEffect } from 'react';
import { useState } from 'react';
import GigPreview from '../GigPreview/GigPreview';
import GigFull from '../GigFull/GigFull';
import './GigPost.css';

const GigPost = ({ gig, currentUserId }) => {
  const [previewMode, setPreviewMode] = useState('false');

  const urgencyColorPicker = (urgency, view) => {
    console.log(urgency)
    return `urgent-${urgency} post-container ${view}-container`
    // if (urgency === "high") return "urgent-high post-container preview-container"
  }

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
          <div className={urgencyColorPicker(gig.urgency, "preview") }>
            <GigPreview gig={gig} />
          </div>
        </li>
      ) : (
        <li onClick={togglePreview}>
          <div className={urgencyColorPicker(gig.urgency, "full") }>
            <GigFull gig={gig} currentUserId={currentUserId} />
          </div>
        </li>
      )}
    </>
  );
};

export default GigPost;
