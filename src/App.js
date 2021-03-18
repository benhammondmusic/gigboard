// import React from 'react'
import axios from 'axios';
import './App.scss';
// import {Button} from 'react-bootstrap/Button'

import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Auth from './Models/Auth'

// DEVELOPMENT API: localhost:5000 for heroku local web
// PRODUCTION API: use a deployed backend on heroku

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('');
  
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))
  console.log({currentUser})

  const history = useHistory()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const user = await Auth.register({ email, username, password });
      console.log(user, 'user created')
      const token = user

      localStorage.setItem( 'uid', token );
      setCurrentUser(token);

      history.push('/gigs')

    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {

        const user = await Auth.login({email, password})
        const token = user.data.signedJwt

        localStorage.setItem( 'uid', token );

        setCurrentUser(token);

        history.push('/gigs');
        
    } catch (error) {
       console.log(error)
    }
  }

  const logOut = () => {
    localStorage.clear()
    setCurrentUser(localStorage.getItem('uid'))
    history.push('/login')
  };

  return (
    <>
      <Navbar logOut={logOut} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <main>
        <Routes currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} setEmail={setEmail} setPassword={setPassword} handleRegister={handleRegister} setUsername={setUsername}/>
      </main>
    </>
  );
}

export default App;
