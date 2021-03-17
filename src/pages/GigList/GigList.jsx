import { useState } from 'react';
import GigPost from '../../components/GigPost/GigPost';
import SearchBar from '../../components/SearchBar/SearchBar';

const GigList = () => {
  const [gigs, setGigs] = useState(['gig 1', 'gig 2', 'gig3']);

  return (
    <>
      <h2>GigList</h2>

      <SearchBar />
      <ul>
        {gigs.map((gig, idx) => {
          return <GigPost key={idx} gig={gig} />;
        })}
      </ul>
    </>
  );
};

export default GigList;
