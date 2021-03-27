import './Home.css';

const Home = () => {
  return (
    <div>
      <div id="homeContainer">
        <div className="floating-text>">
          <h1 id="gigboard">Gigboard</h1>
          <p id="tagline">
            Full time money
            <br />
            ... minus the commitment
          </p>
          <br />
          <div className="container">
          <img className='sergio'/>
          <img className='ben'/>
          <img className='james'/>
          <img className='kaye'/>
          <img className='hayden'/>
          <img className='jc'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
