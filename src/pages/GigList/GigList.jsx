import GigPosting from '../../components/GigPosting/GigPosting';
import GigPreview from '../../components/GigPreview/GigPreview';
import SearchBar from '../../components/SearchBar/SearchBar';

const GigList = () => {
  return (
    <>
      <h2>GigList</h2>

      <SearchBar />
      <ul>
        <li>
          <GigPosting />
        </li>
        <li>
          <GigPreview />
        </li>
        <li>
          <GigPosting />
        </li>
      </ul>
    </>
  );
};

export default GigList;
