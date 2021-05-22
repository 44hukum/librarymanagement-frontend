
import React from 'react'

import "../assets/css/Registration-Form-with-Photo.css"



import '../assets/js/bs-init.js'
import background from '../assets/img/background.png'


function bookadd(){
    return (
        <section className="register-photo">
        <div className="form-container">
            <form method="post">
                <h2 className="text-center"><strong>Add Book&nbsp;</strong>
                </h2>
                <input className="form-control form-control-sm" type="file" name="book" />
                <input className="form-control form-control-sm" type="text" style={{'margin-top': '2em'}} name="bookname" placeholder="Book name"/>
                <input className="form-control form-control-sm" type="text" style={{'margin-top': '2em'}} name="writer" placeholder="writer" />
              
                <div className="mb-3">
                    <button className="btn btn-primary d-block w-100" type="submit" style={{background: 'rgb(71,244,78)'}}>upload</button>
                </div>
            </form>
        </div>
    </section>

    )
}
export default bookadd;