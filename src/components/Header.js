import React from 'react'
import "../assets/css/Navigation-with-Search.css"




import logo from '../assets/img/logo.png'

function Header(){
    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-search" style={{background: "rgb(255,255,255)"}}>
        <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button><img src={logo} style={{width: "16em"}} />
            <div className="collapse navbar-collapse text-center d-xl-flex flex-row justify-content-center align-self-center flex-nowrap justify-content-xl-start" id="navcol-1" style={{width: "870px"}}>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="#">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Books</a></li>
                </ul>
                <form className="me-auto search-form" target="_self">
                    <div className="d-flex align-items-center"><label className="form-label d-flex mb-0" for="search-field"></label>
                    <input className="form-control search-field" type="search" id="search-field" name="search" style={{width: "159.7px",color: "",border_color: "#00ff00"}} /><i className="fa fa-search" style={{width: "25.9px",border_style: "none",border_color: "rgb(23,163,20)",color: "rgb(43,166,23)"}}></i></div>
                </form>
                <button className="btn btn-primary action-button" type="button">Logout</button>
            </div>
        </div>
    </nav>
    )
}

export default Header;