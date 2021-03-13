
import './App.css';

import Routes from './config/routes'
import Navbar from './components/Navbar/Navbar';

function App() {
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
