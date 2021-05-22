import React from 'react'
import "../assets/css/Article-List.css"
import "../assets/css/Contact-Form-Clean.css"
import "../assets/css/Newsletter-Subscription-Form.css"
import "../assets/css/styles.css"

import '../assets/js/bs-init.js'
import {Link } from 'react-router-dom'
// images
import logo from '../assets/img/logo.png'
import content from '../assets/img/unnamed.png'
import background from '../assets/img/background.png'

function books() {

    return (
        <div className="Home">
      
            <section className="article-list">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">All Books</h2>
                    </div>
                </div>
                <div className="container">


                    <div className="intro"></div>
                    <div className="row g-4 articles justify-content-between align-items-center articles">
                    {/* BOOKS */}
                    <div className="col-4">
                            <section className="article-list">
                                <div className="container">
                                    <div className="intro"></div>
                                    <div className="row articles">
                                        <div className="item">
                                            <a href="#"><img className="img-fluid" src={content} /></a>
                                            <Link className="action" to="/borrow">
                                            <button className="btn btn-success" type="button">Borrow</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        
                        </div>
                       
                        
                      
                    {/* BOOKS */}

                    </div>
                </div>
            
    </section>
                    
   </div>
 )
}

export default books;
