// App.js
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HomeLayout />}>

          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
