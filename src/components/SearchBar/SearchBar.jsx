// import { useHistory } from 'react-router-dom';
import './SearchBar.css';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const SearchBar = ({ searchQuery, setSearchQuery, dateRange, setDateRange }) => {
  return (
    <div className="searchBar">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Gigs</span>
        </label>
        <input value={searchQuery} onInput={(e) => setSearchQuery(e.target.value)} type="text" id="header-search" placeholder="Search Gigs" name="s" />
      </form>

      <ButtonGroup toggle>
        Show Gigs Happening:
        <ToggleButton type="radio" variant="secondary" name="radio" value="today" checked={dateRange === 'today'} onChange={(e) => setDateRange(e.currentTarget.value)}>
          This Week
        </ToggleButton>
        <ToggleButton type="radio" variant="secondary" name="radio" value="any" checked={dateRange === 'any'} onChange={(e) => setDateRange(e.currentTarget.value)}>
          Any Date
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

export default SearchBar;
