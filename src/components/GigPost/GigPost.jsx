import { useEffect } from 'react';
import { useState } from 'react';
import GigPreview from '../GigPreview/GigPreview';
import GigFull from '../GigFull/GigFull';
import './GigPost.css';
import pin from '../../images/pin.png';
import greenPin from '../../images/green-pin.png';

const GigPost = ({ gig, currentUserId, tilt, idx }) => {
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
          <div style={{ transform: `rotate(${tilt}deg` }} className={`urgent-${gig.urgency} post-container preview-container`}>
            {/* tilt is already random, so assign pin color based on that num */}
            <img className="pin" src={tilt % 3 ? pin : greenPin} width={48} height={48} />
            <GigPreview gig={gig} />
          </div>
        </li>
      ) : (
        <li onClick={togglePreview}>
          <div style={{ transform: `rotate(${tilt / 5}deg` }} className={`urgent-${gig.urgency} post-container full-container`}>
            <GigFull gig={gig} currentUserId={currentUserId} />
          </div>
        </li>
      )}
    </>
  );
};

export default GigPost;
