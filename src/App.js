// import React from 'react'
import axios from 'axios';
import './App.scss';
// import {Button} from 'react-bootstrap/Button'

import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';

// DEVELOPMENT API: localhost:5000 for heroku local web
// PRODUCTION API: use ben's deployed backend on heroku
let API_URL;
if (process.env.NODE_ENV === 'development') {
  console.log('dev on 5000');
  API_URL = 'http://localhost:5000';
} else if (process.env.NODE_ENV === 'production') {
  console.log('prod on kayes backend heroku');
  API_URL = 'https://kaye-gigboard.herokuapp.com';
}

function App() {
  axios
    .get(`${API_URL}/helloworld`)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(API_URL);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  /* 
<APP> SCAFFOLDING
<App>
    <Nav />
    <Routes />  // resolves to <Home /> <GigList} /> <Login /> or <Register /> based on URL

</App>
*/

  /* 
<HOME> SCAFFOLDING
<Home>



</ Home>


*/

  return (
    <App>
      <Navbar />
      <main>
        <Routes />
      </main>
    </App>
  );
}

export default App;
