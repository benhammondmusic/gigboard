// guide to implementing SEARCH BAR at: https://www.emgoto.com/react-search-bar/

import axios from 'axios';
import { useEffect, useState } from 'react';
import GigPost from '../../components/GigPost/GigPost';
import SearchBar from '../../components/SearchBar/SearchBar';
import './GigList.css';

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

  // STATE
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [gigs, setGigs] = useState([]);

  // search bar filter
  const filteredGigs = filterGigs(gigs, searchQuery);

  // get all gigs from backend/db on PAGE LOAD
  useEffect(() => {
    const fetchGigs = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/gigs`);
      console.log('RESPONSE FROM GET  API/GIGS/', res);
      const fetchedGigs = res.data.foundGigs;
      console.log('fetched gigs to map over', fetchedGigs);
      console.log(typeof [...fetchedGigs]);
      setGigs(fetchedGigs);
      console.log(gigs);
    };
    fetchGigs();
  }, []);

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
