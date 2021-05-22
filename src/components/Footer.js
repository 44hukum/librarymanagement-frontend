import React from 'react'
import "../assets/css/Footer-Dark.css"
import { Link } from 'react-router-dom'


 function Footer(){
    return (
        <div>
            
        
<footer className="footer-dark">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-3 item">
                <h3>Herald Library</h3>
            </div>
            <div className="col-sm-6 col-md-3 item">
                <h3>Quick links</h3>
                <ul>
                <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><a href="#">library staff</a></li>
                    <li><a href="#">Terms and Condition</a></li>
                </ul>
            </div>
            <div className="col-md-6 item text">
                <h3>About us</h3>
                <p>
                Herald Library will help the students to borrow books from online.
This Library also tracks the students activities and keep the informations about the books.

                </p>
            </div>
            <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
        </div>
        <p className="copyright">Herald library© 2021</p>
    </div>
</footer>
</div>
    )
}
export default Footer;