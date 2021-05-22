import React from 'react'
import "../assets/css/Navigation-with-Search.css"
import "../assets/css/styles.css"

import '../assets/js/bs-init.js'

// images
import logo from '../assets/img/logo.png'
import content from '../assets/img/unnamed.png'
import background from '../assets/img/background.png'

function librarian(){
    return (
        <div className="librarian">
         {/* <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
        <div className="container">
            <img src={logo} style={{width: "15em"}} /><a className="navbar-brand" href="#"></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav">
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                </ul>
                <small className="form-text">Librarian dashboard</small>
                <form className="me-auto search-form" target="_self">
                    <div className="d-flex align-items-center"><label className="form-label d-flex mb-0" for="search-field"></label></div>
                </form><a className="btn btn-light action-button" role="button" href="#">Logout</a>
            </div>
        </div>
    </nav> */}
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 style={{'margin-top': "2em" }}>Borrowed Book</h1>
            </div>
            <div className="col-md-12">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Username</th>
                                <th>Book Name</th>
                                <th>Status</th>
                                <th>Returned Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cell 1</td>
                                <td>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 5</td>
                            </tr>
                            <tr>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-12">
                <h1 style={{'margin-top': "2em"}}>Books</h1><button className="btn btn-success btn-sm" type="button">Add book</button>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Book name</th>
                                <th>Writer</th>
                                <th>Action</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cell 1</td>
                                <td>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 5</td>
                            </tr>
                            <tr>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-12">
                <h1 style={{'margin-top': "2em" }}>Users</h1><button className="btn btn-success btn-sm" type="button">Add user</button>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Username</th>
                                <th>Book Name</th>
                                <th>Status</th>
                                <th>Returned Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cell 1</td>
                                <td>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 5</td>
                            </tr>
                            <tr>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                                <td>Cell 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </div>       
    )
}
export default librarian;