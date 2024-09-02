import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js'
import Home from './pages/Home/Home.js'
import Footer from './components/Footer.js';
import Login from './pages/Login/Login.js';
import Profile from './pages/Profile/Profile.js';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
