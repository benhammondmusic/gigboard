import './Home.css';
import Sergio from '../../images/Sergio.png';
import Ben from '../../images/Ben.png';
import James from '../../images/James.png';
import Kaye from '../../images/Kaye.png';
import Hayden from '../../images/Hayden.png';
import JC from '../../images/JC.png';

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

          <div className="bitmojis">
            <img className="sergio" alt="" src={Sergio} />

            <img className="ben" alt="" src={Ben} />

            <img className="james" alt="" src={James} />
            <img className="kaye" alt="" src={Kaye} />
            <img className="hayden" alt="" src={Hayden} />
            <img className="jc" alt="" src={JC} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
