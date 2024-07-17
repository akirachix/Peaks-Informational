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
        <div className='landingPage'>
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
                <a href="#LandingPage" onClick={(e)=>{e.preventDefault(); scrollToSection('LandingPage');}}> Home</a>
                <a href="# howitworks-container" onClick={(e)=> {e.preventDefault();scrollToSection ('howitworks-container');}}>How it works</a>
                <a href="# About-Us" onClick={(e)=> {e.preventDefault();scrollToSection ('About-Us');}}>About Us</a>
                <a href="# Partners" onClick={(e)=>{e.preventDefault();scrollToSection ('Partners');}}>Partners</a>
                <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollToSection ('contact');}}>Contacts</a>
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