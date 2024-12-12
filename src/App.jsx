
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import Home from './Home';
import Users from './Users';
import About from './About';
import Add from './Add';
import Search from './Search';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
   
        <Route path="/" element={<HomeLayout />}>
          
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          
          
          <Route path="about" element={<About />}>
            <Route path="add" element={<Add />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
