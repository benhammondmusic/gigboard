import { useState } from 'react';
import GigPost from '../../components/GigPost/GigPost';
import SearchBar from '../../components/SearchBar/SearchBar';
import './GigList.css'

// guide at: https://www.emgoto.com/react-search-bar/

// this data will be replaced with actual data from backend
const sampleGigs = [
  { id: '1', description: 'This first gig is about stuff' },
  { id: '2', description: 'This next gig is about other stuff' },
  { id: '3', description: 'We have yet another gig!' },
  { id: '4', description: 'This is the fourth and final gig' },
];

const filterGigs = (gigs, query) => {
  if (!query) {
    return gigs;
  }

  return gigs.filter((gig) => {
    const gigDescription = gig.description.toLowerCase();
    return gigDescription.includes(query);
  });
};

const GigList = () => {
  // read user's query from address bar
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredGigs = filterGigs(sampleGigs, searchQuery);

  const [gigs, setGigs] = useState(sampleGigs);

  return (
    <>
      <h2>GigList</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
        <ul>
        {filteredGigs.map((gig, idx) => {
          return <GigPost key={idx} gig={gig} />;
        })}
      </ul>
      
    </>
  );
};

export default GigList;

