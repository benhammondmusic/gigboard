// import React from 'react'
import axios from 'axios';
import './App.scss';
// import {Button} from 'react-bootstrap/Button'

import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

// DEVELOPMENT API: localhost:5000 for heroku local web
// PRODUCTION API: use a deployed backend on heroku

function App() {
  const [currentUsername, setCurrentUsername] = useState('benhammondmusic');
  const [currentUserEmail, setCurrentUserEmail] = useState('hello@benhammond.tech');

  const logOut = () => {
    console.log('Logging Out', currentUsername);
    setCurrentUsername('');
    setCurrentUserEmail('');
  };

  return (
    <>
      <Navbar logOut={logOut} currentUsername={currentUsername} />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
