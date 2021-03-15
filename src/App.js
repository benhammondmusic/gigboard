// import React from 'react'
import axios from "axios";
import "./App.css";
// import {Button} from 'react-bootstrap/Button'

import Routes from "./config/routes";
import Navbar from "./components/Navbar/Navbar";

// DEVELOPMENT API: localhost:5000 for heroku local web or 3001 for nodemon
// (make sure it's running with nodemon, and that you have a .env file that includes
// NODE_ENV='development'
//
// PRODUCTION API: use ben's deployed backend on heroku
let API_URL;
if (process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:5000";
} else if (process.env.NODE_ENV === "production") {
  API_URL = "https://kaye-gigboard.herokuapp.com";
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
