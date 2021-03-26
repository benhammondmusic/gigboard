// guide to implementing SEARCH BAR at: https://www.emgoto.com/react-search-bar/

// import axios from 'axios';
import { useEffect, useState } from 'react';
import GigPost from '../../components/GigPost/GigPost';
import SearchBar from '../../components/SearchBar/SearchBar';
import './GigList.css';
import Gig from '../../Models/Gig';

// apply random angle for gig cards
const getRandomTilt = () => {
  return Math.floor(Math.random() * 90) - 45;
};

// for the search bar function
const filterGigs = (gigs, query) => {
  if (!query) {
    return gigs;
  }

  // search every text based field (incl tags) of every gig
  return gigs.filter((gig) => {
    const info = gig.title + gig.description + JSON.stringify(gig.tags) + gig.location;
    return info.toLowerCase().includes(query);
  });
};

const GigList = ({ currentUserId }) => {
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
      const res = await Gig.all();
      const fetchedGigs = res.data.foundGigs;
      setGigs(fetchedGigs);
    };
    fetchGigs();
  }, []);

  return (
    <div className="GigList">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <ul className="gigs-box">
        {filteredGigs.map((gig, idx) => {
          return <GigPost key={idx} idx={idx} gig={gig} tilt={getRandomTilt()} currentUserId={currentUserId} />;
        })}
      </ul>
    </div>
  );
};

export default GigList;
