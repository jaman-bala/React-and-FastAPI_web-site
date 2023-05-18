import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {setToken, fetchToken} from './Auth.js'
 
export default function Login(){
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
  
    const handleSubmit = () => {
        if(username.length === 0){
          alert("Username has left Blank!");
        }
        else if(password.length === 0){
          alert ("password has left Blank!");
        }
        else{
            console.log('axios')
            axios.post('http://localhost:8000/createusers', {
                username: username,
                password: password,
                
            })
            .then(function (response) {
                console.log(response);
                alert(response.data["message"])
                if (response.data["message"]=="Login failed") {
                    alert("Login failed");
                }else { 
                    if(response.data.token){
                        setToken(response.data.token)
                        navigate("/profile");
                    }
                }
            })
            .catch(function (error) {
                console.log(error, 'error');
            });
        }
    }
  return (
    <div>
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
    <div className='container p-5'>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
              {
                fetchToken() 
                ? (
                    <p>You are logged in!</p>
                )
                : (
                    <p>Login Account!</p>
                )
              } 
                <form>
                   
                  <div className="form-outline mb-4">
                    <label className="form-label">Your User Name</label>
                    <input type="text" className="form-control form-control-lg" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                   
                  <div className="form-outline mb-4">
                    <label className="form-label">Your Password</label>
                    <input type="text" className="form-control form-control-lg" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                   
 
                  <div className="d-flex justify-content-center">
                  <input type="button" className="btn btn-success btn-lg" name="submit" id="submit" value="Login" onClick={handleSubmit} />
                  </div>
  
                </form>
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}