
import Howitworks from './Howitworks';
import About from './About-Us';
import './App.css';
import Partners from './Partners';
import Contact from './Contacts';
import Navbar from './Navbar ';
import Home from './LandingPage';



function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Howitworks/> 
    <About/> 
    <Partners/> 
    <Contact/>
    </div>
  );
}
export default App;
