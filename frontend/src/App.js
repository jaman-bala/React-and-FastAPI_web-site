import React, { } from 'react';
import './App.css';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import Login from './components/Login.js'
import Profile from './components/Profile.js'
import Page from './components/Page.js'
import About from './components/About.js';
import Contact from './components/Contact.js';
import News from './components/News.js';
import Faq from './components/Faq.js';
// import { RequireToken } from './components/Auth.js';
import Adminpanel from './adminpanel/Adminpanel';
import Register from './adminpanel/Register';


function App() {
  return (
    <div className="vh-100 gradient-custom">   
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pageadmin" element={<Adminpanel />} />
            <Route path="/registr" element={<Register />} />
            {/* <Route path="/pageadmin" element={<RequireToken><Adminpanel /></RequireToken>}/>  */}
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App; 
