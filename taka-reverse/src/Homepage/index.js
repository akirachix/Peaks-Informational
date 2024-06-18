import './index.css'



function Navbar(){
    
    return(
        
        <div className='body'>

        <header>
            <img src='/media/logo.png' alt='logo' className='logo-image'/>
            <nav className=  "show-nav">
                <a href="/#">Home</a>
                <a href="/#">How it works</a>
                <a href="/#">About Us</a>
                <a href="/#">Partners</a>
                <a href="/#">Reward</a>
                <a href="/#">Contacts</a>
            </nav>
           
        </header>
            <div className='Recycling-context'>
                <p>Recycling is the future.</p>
                <button className='button'>
                    <a href="/#">Learn more</a>
                </button>

            </div>


     </div>

    );
}
export default Navbar;