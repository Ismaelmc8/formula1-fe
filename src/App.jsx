import React, { useContext }from 'react';
import { Routes, Route } from 'react-router-dom';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//pages
import Home from './pages/home/Home';
import LandingPage from './pages/landingpage/LandingPage';
import LoginPage from './pages/login/LoginPage';
import Signup from './pages/signup/Signup';
import Leagues from './pages/leagues/Leagues';
//components
import NotAuthNavbar from './components/header/NotAuthNavbar';
import NavbarCustom from './components/header/NavBarCustom';
import About from './components/about/About';
import { AuthContext } from './helpers/AuthProvider';



function App() {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.isLoggedIn ? <NavbarCustom /> : <NotAuthNavbar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/leagues' element={<Leagues />} />
        <Route path='/league/home' element={<LandingPage />} />
      </Routes>
      <About />
    </>
  )
}

export default App;
