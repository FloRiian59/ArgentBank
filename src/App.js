import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js'
import Home from './pages/Home/Home.js'
import Footer from './components/Footer.js';
import Login from './pages/Login/Login.js';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
