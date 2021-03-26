import './App.scss';
import Auth from './Models/Auth';
import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

// DEVELOPMENT API: localhost:5000 for heroku local web
// PRODUCTION API: use a deployed backend on heroku

function App() {
  const [formPassword, setFormPassword] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');

  useEffect(() => {
    setCurrentUserEmail(localStorage.getItem('currentUserEmail') || '');
    setCurrentUserId(localStorage.getItem('currentUserId') || '');
  }, []);

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await Auth.register({ email: formEmail, password: formPassword });

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
      const res = await Auth.login({ email: formEmail, password: formPassword });

      setCurrentUserId(res.data.currentUserId);

      setCurrentUserEmail(JSON.parse(res.config.data).email);

      localStorage.setItem('jwt', res.data.token);

      history.push('/gigs');
    } catch (error) {
      console.log(error);
    }
  };

  // When user info changes, the info will be set in local storage
  // If user is logged out, nothing is in storage cd: 74-80.
  useEffect(() => {
    if (currentUserId) localStorage.setItem('currentUserId', currentUserId);
  }, [currentUserId]);

  useEffect(() => {
    if (currentUserEmail) localStorage.setItem('currentUserEmail', currentUserEmail);
  }, [currentUserEmail]);

  const logOut = () => {
    setCurrentUserEmail();
    setCurrentUserId();
    localStorage.clear();
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
