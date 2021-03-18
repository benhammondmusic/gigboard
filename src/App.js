// import React from 'react'
import axios from 'axios';
import './App.scss';
// import {Button} from 'react-bootstrap/Button'
import Auth from './Models/Auth';
import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// DEVELOPMENT API: localhost:5000 for heroku local web
// PRODUCTION API: use a deployed backend on heroku

function App() {
  const [password, setPassword] = useState('');
  const [currentUserEmail, setCurrentUserEmail] = useState(localStorage.getItem('uid'));
  console.log({ currentUserEmail });

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.register({ currentUserEmail, password });
      console.log(user, 'user created');
      const token = user.data.signedJwt;

      localStorage.setItem('uid', token);
      setCurrentUserEmail(token);

      history.push('/gigs');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.login({ currentUserEmail, password });
      const token = user.data.signedJwt;

      localStorage.setItem('uid', token);

      setCurrentUserEmail(token);

      history.push('/gigs');
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.clear();
    setCurrentUserEmail(localStorage.getItem('uid'));
    history.push('/');
  };

  return (
    <>
      <Navbar logOut={logOut} currentUserEmail={currentUserEmail} />
      <main>
        <Routes currentUserEmail={currentUserEmail} setCurrentUserEmail={setCurrentUserEmail} handleLogin={handleLogin} handleRegister={handleRegister} password={password} setPassword={setPassword} />
      </main>
    </>
  );
}

export default App;
