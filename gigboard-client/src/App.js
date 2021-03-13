import axios from 'axios'
import './App.css';

import Routes from './config/routes'
import Navbar from './components/Navbar/Navbar';

function App() {

  
  axios.get( 'http://localhost:3001/helloworld')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
  return (
    <>
    <Navbar/>

    <main>
      <Routes />
    </main>
    </>
  );
}

export default App;
