// import React from 'react'

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
  const [formPassword, setFormPassword] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [currentUserEmail, setCurrentUserEmail] = useState(localStorage.getItem('uid'));
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem('currentUserId'));

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      console.log(formEmail, 'formEmail inside handleReg');
      const res = await Auth.register({ email: formEmail, password: formPassword });
      console.log(res.data.currentUserId, 'mongoID of current registered and logged in user');
      // const token = res.data.signedJwt;

      setCurrentUserId(res.data.currentUserId);
      setCurrentUserEmail(JSON.parse(res.config.data).email);

      history.push('/gigs');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(formEmail, 'formEmail inside handleLogin');
      const res = await Auth.login({ email: formEmail, password: formPassword });
      // console.log(res, "user after Auth.login() inside handleLogin");
      // const token = user.data.signedJwt;
      // localStorage.setItem("uid", token);
      setCurrentUserId(res.data.currentUserId);
      setCurrentUserEmail(JSON.parse(res.config.data).email);

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
        <Routes currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} currentUserEmail={currentUserEmail} setCurrentUserEmail={setCurrentUserEmail} handleLogin={handleLogin} handleRegister={handleRegister} formPassword={formPassword} setFormPassword={setFormPassword} setFormEmail={setFormEmail} />
      </main>
    </>
  );
}

export default App;
