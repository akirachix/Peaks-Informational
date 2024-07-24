import React, {useState} from 'react';
import './index.css'


function Home(){
    return(
        <div id='landingPage'>
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
export default Home;