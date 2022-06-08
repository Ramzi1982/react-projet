import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function SignIn() {

    const [fullName,setFullName]= useState()
    const [username,setUsername]= useState()
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
const navigate=useNavigate()
    const handleSignUp=(e)=>{
        e.preventDefault()
        axios
        .post("http://localhost:4000/app/signup", {
          fullName: fullName,
          username: username,
          email: email,
          password: password
        })
        .then(function(response) {
          console.log(response.data);
            alert('User: '+username +'successfuly')
        })
        .catch(function(error) {
          console.log(error);
          alert(error)
        });    }

        const handleSignIn=(e)=>{
            e.preventDefault()
            axios
            .post("http://localhost:4000/app/signin",{
                email: email,
                password: password
              })
            .then(function(response) {
                console.log(response.data);
                alert('data: '+JSON.stringify(response.data) + ' successfuly')
                navigate('/dashbord')
            })
            .catch(function(error) {
              console.log(error);
              alert(error)
            });    }
  return (
      
    <div className='sign'>
        {/* <a href="https://front.codes/" class="logo" target="_blank">
        <img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
</a> */}

<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://assets.mixkit.co/videos/preview/mixkit-enterprising-mom-plays-with-her-baby-while-working-33046-large.mp4" type="video/mp4"/>
  </video>
<div class="section">
    <div class="container">
        <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3" className='login_title' style={{width:"108%",fontSize: "32px"}}><span>Log In </span><span>Sign Up</span></h6>
                      <input class="checkbox" type="checkbox" id="reg-log"   name="reg-log"/>
                      <label for="reg-log" className='regL' style={{marginTop:"5%", left:"4%"}}></label>
                    <div class="card-3d-wrap mx-auto">
                        <div class="card-3d-wrapper">
                          <form onSubmit={handleSignIn}>
                          <div class="card-front">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                        <h4 class="mb-4 pb-3">Log In</h4>
                                        <div class="form-group">
                                            <input required type="email" name="logemail" class="form-style" placeholder="Your Email" id="loginemail" onChange={e => setEmail(e.target.value)} autoFocus autocomplete="off"/>
                                            <i class="input-icon uil uil-at"></i>
                                        </div>	
                                        <div class="form-group mt-2">
                                            <input type="password" required name="logpass" class="form-style" placeholder="Your Password" id="loginpass" onChange={e => setPassword(e.target.value)} autocomplete="off"/>
                                            <i class="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <button href="#"  class="btn mt-4">submit</button>
                                        <p class="mb-2 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                        
                                                      <div class="icons_container">
                                                          <div class="icon facebook">
                                                              <div class="tooltip">
                                                                  Facebook
                                                              </div>
                                                              <span><i class="fab fa-facebook-f"></i></span>
                                                          </div>
                                                          <div class="icon youtube">
                                                              <div class="tooltip">
                                                                  Google
                                                              </div>
                                                              <span><i class="fab fa-google"></i></span>
                                                          </div>
                                                          <div class="icon github">
                                                              <div class="tooltip">
                                                                  Github
                                                              </div>
                                                              <span><i class="fab fa-github"></i></span>
                                                          </div>
                                                      </div>
                                      </div>
                                  </div>
                              </div>
                          </form>
                        <div class="card-back">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                       <form onSubmit={handleSignUp}>
                                       <h4 class="mb-4 pb-3">Sign Up</h4>
                                        <div class="form-group">
                                            <input type="text" name="logname" class="form-style" required  onChange={e => setFullName(e.target.value)} placeholder="Your Full Name..." id="logname" autocomplete="off"/>
                                            <i class="input-icon uil uil-user"></i>
                                        </div>
                                        <div class="form-group mt-2">
                                            <input type="text" name="loguser" class="form-style" required placeholder="Your User Name..." onChange={e => setUsername(e.target.value)} id="logname" autocomplete="off"/>
                                            <i class="input-icon uil uil-lock-alt"></i>
                                        </div>	
                                        <div class="form-group mt-2">
                                            <input type="email" name="logemail" class="form-style" required onChange={e => setEmail(e.target.value)} placeholder="Your Email..." id="logemail" autocomplete="off"/>
                                            <i class="input-icon uil uil-at"></i>
                                        </div>	
                                        <div class="form-group mt-2">
                                            <input type="password" name="logpass" class="form-style" required  placeholder="Your Password..." onChange={e => setPassword(e.target.value)} id="logpass" autocomplete="off"/>
                                            <i class="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <button  class="btn mt-4">submit</button>
                                       </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</div></div>
  )
}

export default SignIn