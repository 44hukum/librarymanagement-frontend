import React from 'react'

import "../assets/css/Registration-Form-with-Photo.css"



import '../assets/js/bs-init.js'
import background from '../assets/img/background.png'


function borrow(){
    return (
        <section className="register-photo">
        <div className="form-container">
            <div className="image-holder" style={{background: `url(${background})` }}></div>
            <form method="post">
                <h2 className="text-start"><strong>Book&nbsp;</strong>
                </h2>
                <small className="form-text">1. Have to return in 14 days else 2rs per day will be charged
                </small>
                <div className="mb-3"></div>
                <div className="mb-3">
                    <div className="form-check"><label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />I accept the terms and condition.</label></div>
                </div>
                <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: 'rgb(71,244,78)'}}>Register</button></div>
            </form>
        </div>
    </section>

    )
}
export default borrow