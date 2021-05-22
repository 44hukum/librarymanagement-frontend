import Registration from './components/Registration'
import Home from './components/Home'
import Librarian from './components/LibrarianDashboard'
import Signup from './components/Signup'
import Contactus from './components/Contactus'
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
   
    <Route path="/login" component={Registration}></Route>
     <Route path="/contact" component={Contactus}></Route>
     <Route path="/Librarian" component={Librarian}></Route>
     <Route path="/home" component={Home}></Route>
          
    <Footer />
      
   </div>
   </Router>
 )
}

export default App;
