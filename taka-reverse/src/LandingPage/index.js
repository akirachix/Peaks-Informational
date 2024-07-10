import React, {useState} from 'react';
import './index.css'
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto': 'hidden';
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
                <a href="#" onClick={toggleMenu}>Home</a>
                <a href="#" onClick={toggleMenu}>How it works</a>
                <a href="#" onClick={toggleMenu}>About Us</a>
                <a href="#" onClick={toggleMenu}>Partners</a>
                <a href="#" onClick={toggleMenu}>Contacts</a>
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