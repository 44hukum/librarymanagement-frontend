import Registration from './components/Registration'
import Home from './components/Home'
import Librarian from './components/LibrarianDashboard'
import Signup from './components/Signup'
import Contactus from './components/Contactus'
import books from './components/Books'
import borrow from './components/Borrow'
import bookadd from './components/Bookadd'
// header and footer

import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  
 return (
   <Router>
  <div className="App">
    <Header />
    <Route path="/signup" component={Signup}></Route>

    <Route path="/addbook" component={bookadd}></Route>
    <Route path="/borrow" component={borrow}></Route>
    <Route path="/books" component={books}></Route>


    <Route path="/login" component={Registration}></Route>
     <Route path="/contact" component={Contactus}></Route>
     <Route path="/Librarian" component={Librarian}></Route>
     <Route path="/" exact component={Home}></Route>
          
    <Footer />
      
   </div>
   </Router>
 )
}

export default App;
