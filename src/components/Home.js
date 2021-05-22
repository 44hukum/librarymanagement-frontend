import React from 'react'
import "../assets/css/Article-List.css"
import "../assets/css/Contact-Form-Clean.css"
import "../assets/css/Newsletter-Subscription-Form.css"
import "../assets/css/styles.css"

import '../assets/js/bs-init.js'

// images
import logo from '../assets/img/logo.png'
import content from '../assets/img/unnamed.png'
import background from '../assets/img/background.png'

function Home() {

    return (
        <div className="Home">
      
            <div data-bss-parallax-bg="true" style={{ height: "500px", background: `url(${background}) center / cover` }}></div>
            <section className="article-list">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Books</h2>
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
                                            <a className="action" href="#"></a>
                                            <button className="btn btn-success" type="button">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        
                        </div>
                        <div className="col-4">
                            <section className="article-list">
                                <div className="container">
                                    <div className="intro"></div>
                                    <div className="row articles">
                                        <div className="item">
                                            <a href="#"><img className="img-fluid" src={content} /></a>
                                            <a className="action" href="#"></a>
                                            <button className="btn btn-success" type="button">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        
                        </div>
                        <div className="col-4">
                            <section className="article-list">
                                <div className="container">
                                    <div className="intro"></div>
                                    <div className="row articles">
                                        <div className="item">
                                            <a href="#"><img className="img-fluid" src={content} /></a>
                                            <a className="action" href="#"></a>
                                            <button className="btn btn-success" type="button">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        
                        </div>
                        
                        <div className="col-4">
                            <section className="article-list">
                                <div className="container">
                                    <div className="intro"></div>
                                    <div className="row articles">
                                        <div className="item">
                                            <a href="#"><img className="img-fluid" src={content} /></a>
                                            <a className="action" href="#"></a>
                                            <button className="btn btn-success" type="button">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        
                        </div>
                        
                        <div className="col-4">
                            <section className="article-list">
                                <div className="container">
                                    <div className="intro"></div>
                                    <div className="row articles">
                                        <div className="item">
                                            <a href="#"><img className="img-fluid" src={content} /></a>
                                            <a className="action" href="#"></a>
                                            <button className="btn btn-success" type="button">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        
                        </div>
                        
                        <div className="col-4">
                            <section className="article-list">
                                <div className="container">
                                    <div className="intro"></div>
                                    <div className="row articles">
                                        <div className="item">
                                            <a href="#"><img className="img-fluid" src={content} /></a>
                                            <a className="action" href="#"></a>
                                            <button className="btn btn-success" type="button">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        
                        </div>
                        
                      
                    {/* BOOKS */}

                    </div>
                </div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Contact us</h2>
                        <div className="mb-3"><input className="form-control" type="text" name="name" placeholder="Name" /></div>
                        {/* is-valid is invalid */}
                            <div className="mb-3"><input className="form-control " type="email" name="email" placeholder="Email" />
                            {/* <small className="form-text text-danger">Please enter a correct email address.</small> */}
                            
                            </div>
                                <div className="mb-3"><textarea className="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
                                <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">send </button></div>
            </form>
        </section>
    </section>
                    
   </div>
 )
}

export default Home;
