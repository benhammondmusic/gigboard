import { useEffect } from 'react';
import { useState } from 'react';
import GigPreview from '../GigPreview/GigPreview';
import GigFull from '../GigFull/GigFull';
import './GigPost.css';

const GigPost = ({ gig }) => {
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
          <GigPreview gig={gig} />
        </li>
      ) : (
        <li onClick={togglePreview}>
          <GigFull gig={gig} />
        </li>
      )}
    </>
  );
};

export default GigPost;
