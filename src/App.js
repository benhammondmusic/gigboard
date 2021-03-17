// import React from 'react'
import axios from 'axios';
import './App.scss';
// import {Button} from 'react-bootstrap/Button'

import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';

// DEVELOPMENT API: localhost:5000 for heroku local web
// PRODUCTION API: use a deployed backend on heroku

// ! Get proper API_URL directly from .env or Heroku config vars (you'll have to set your own)

function App() {
  axios
    .get(`${process.env.REACT_APP_API_URL}/helloworld`)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(process.env.REACT_APP_API_URL);
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
      <Navbar />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
