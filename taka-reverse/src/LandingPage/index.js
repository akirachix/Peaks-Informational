import React, {useState} from 'react';
import './index.css'


function Navbar(){
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto': 'hidden';


       
    };


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };


    return(
        <div id='landingPage'>
        <div className='Navbar-container'>
            <div className='logo-image'>
            <img src='/media/logo.png' alt='logo' className='logo-image'/>
            </div>
            <div className={`hamburger-menu ${isMenuOpen? 'active': ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <div className=  {`show-nav ${isMenuOpen ? 'active': ''}`}>
                <a href="#landingPage" onClick={(e)=>{e.preventDefault(); scrollToSection('landingPage');}}> Home</a>
                <a href="# howitworks-container" onClick={(e)=> {e.preventDefault();scrollToSection ('howitworks-container');}}>How it works</a>
                <a href="# about-us" onClick={(e)=> {e.preventDefault();scrollToSection ('about-us');}}>About Us</a>
                <a href="# partners" onClick={(e)=>{e.preventDefault();scrollToSection ('partners');}}>Partners</a>
                <a href="#footer" onClick={(e)=>{e.preventDefault(); scrollToSection ('footer');}}>Contacts</a>
            </div>
        </div>
            <div className='Recycling-context'>
                <p><span>Recycling</span></p>
                <p>is the future.</p>
                <button className='button'>
                    <a href="/#">Learn more</a>
                </button>
            </div>
     </div>
    );
}
export default Navbar;