import { useState } from 'react';
import GigPosting from '../../components/GigPosting/GigPosting';
import GigPreview from '../../components/GigPreview/GigPreview';
import SearchBar from '../../components/SearchBar/SearchBar';

const GigList = () => {
  const [gigs, setGigs] = useState(['gig 1', 'gig 2', 'gig3']);

  return (
    <>
      <h2>GigList</h2>

      <SearchBar />
      <ul>
        {gigs.map((gig, idx) => {
          return <GigPreview key={idx} gig={gig} />;
        })}
      </ul>
    </>
  );
};

export default GigList;
