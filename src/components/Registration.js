import React from 'react'
import "../assets/css/Login-Form-Clean.css"



import '../assets/js/bs-init.js'

import logo from '../assets/img/logo.png'


function Registration() {
  
    return (
       <div>
                
             <section className="login-clean">
               <form method="post">
                   <h2 className="visually-hidden">Login Form</h2>
                   <div className="illustration"><img src={logo} alt="logo" style={{width: "100%" }}/></div>
                   <div className="mb-3"><input className="form-control" type="email" name="username" placeholder="username" /></div>
                   <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                   <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: "rgb(106,244,71)"}} >Log In</button></div><a class="forgot" href="#">Forgot your username or password?</a>
               </form>
           </section>
    
       </div>
     );
   }
   
export default Registration;
   