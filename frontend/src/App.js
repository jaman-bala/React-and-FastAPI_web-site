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
import 
import { RequireToken } from './components/Auth.js';


function App() {
  return (
    <div className="vh-100 gradient-custom">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="/"><img
                      src="/log-IThub.ico"
                      alt="Logo"
                      width="95"
                    /> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="/news">News</a></li>
                            <li class="nav-item"><a class="nav-link" href="/faq">FAQ</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="/login">Ling in</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

           



        {/* <h1 className="page-header text-center p-3"> <img src="/log-IThub.ico" width="260"></img> </h1> */}

        <BrowserRouter>
        {/* <p><Link to="/login" className='btn btn-success'>Login</Link> | <Link to="profile" className='btn btn-success'>Profile</Link>  </p> */}

        <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<Faq />} />

          <Route path="/login" element={<Login />} />
          <Route path="/pageadmin" element={<Adminpanel />} />
          <Route
           path="/profile"
            element={
            <RequireToken>
              <Profile />
          </RequireToken>
          }
          />
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
