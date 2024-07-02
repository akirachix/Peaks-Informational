import './index.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function Contact(){
    return(
        <div className='footer'>
            <h3>Contact Us On</h3>
            <div className='contactInfo'>
            <div>
            <span><BsFillTelephoneFill size= '2.0rem' color='#FFFFFF' /></span>
                <p>+254 793 244 456</p>
                <p>+254 786 965 766</p>
            </div>
            <div>
                <span><FaMapMarkerAlt size= '2.0rem' color='#FFFFFF'/></span>
                <p>Unit no. 75 ReverseTaka Industry Nairobi</p>
            </div>
            <div >
                <span><MdEmail size= '2.0rem' color='#FFFFFF'/></span>
                <p>akwangdeu@gmail.com</p>
                <p>natalywambui@gmail.com</p>
                <p>kantaimercy@gmail.com</p>
            </div>
            </div>
            <hr/>
            <div className='url'>
                <p>@2024reversetaka.com</p>
            </div>
        </div>
    );
}
export default Contact;