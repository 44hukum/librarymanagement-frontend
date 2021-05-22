import React from 'react'

import "../assets/css/Registration-Form-with-Photo.css"



import '../assets/js/bs-init.js'
import background from '../assets/img/background.png'

import logo from '../assets/img/logo.png'

function signup(){
    return (
         <section className="register-photo">
        <div className="form-container">    
            <div className="image-holder" style={{ background: `url(${background})`}}></div>
            <form method="post">
                <h2 className="text-center"><strong>Register User</strong></h2>
                <div className="mb-3"><input className="form-control" type="username" name="username" placeholder="username"/></div>
                <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" value="12345" /></div>
                <div className="mb-3"></div>
                <div className="mb-3">
                    <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox" />Staff</label></div>
                </div>
                
                <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: 'rgb(71,244,78)'}}>Register</button></div>
            </form>
        </div>
    </section>

    )
}
export default signup