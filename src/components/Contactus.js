import React from 'react'
import "../assets/css/Contact-Form-Clean.css"


function Contactus(){
    return(
        <div>
              <section className="contact-clean">
        <form method="post">
            <h2 className="text-center">Send message</h2>
            <div className="mb-3"><input className="form-control" type="text" name="name" placeholder="Name" /></div>
            <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" />
            {/* <small className="form-text text-danger">Please enter a correct email address.</small> */}
            
            </div>
            <div className="mb-3"><textarea className="form-control" name="message" placeholder="Message" rows="14"></textarea></div><button className="btn btn-secondary btn-sm" type="submit" style={{background: 'rgb(15,164,39)'}}>Send</button>
        </form>
    </section>
            </div>
    )
}   
export default Contactus