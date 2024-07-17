
import'./index.css'
import { FaRecycle } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsMenuApp } from "react-icons/bs";
const About = ()=>{
    return(
        
        <div id='About-Us'>
        <div className='About'> 
            <div>
                <h3> About us</h3>
                <p> We are Reverse Taka, our mission is to reduce waste and promote environmental responsibility <br></br>by providing a platform for customers to purchase high quality recycled clothes.
The damage caused<br></br>by fast fashion to the environment is a big fact, so textile waste is. The textile waste increases by billions <br></br>of tons every year, and the environment is under great threat because of this. There are some sustainable <br></br>methods that everyone can easily use to prevent waste generation and environmental damage, and recycling <br></br>is one of them</p>
            </div>
            <div className='icons'>
            <div>
                <figure>
                    <p className='img'><FaRecycle size='3.5rem'/></p>
                    <figcaption> RECYCLING</figcaption>
                </figure>
            </div>
            <div>
                <figure>
                    <p className='img'><FaHandHoldingHeart size='3.5rem'/></p>
                    <figcaption>ENVIRONMENTAL</figcaption>
                </figure>
            </div>
            
            <div>
                <figure>
                    <p className='img'> <BsMenuApp size='3.5rem'/></p>
                    <figcaption> PLATFORM</figcaption>
                </figure>
            </div>
            </div>

        </div>    
        </div>
        
);
}


export default About;
