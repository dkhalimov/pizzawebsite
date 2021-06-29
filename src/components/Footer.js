import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import Telegram from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import '../styles/Footer.css';

function Footer() {
    
    return (
        
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <Telegram />
                <FacebookIcon />
            </div>
            <p> &copy; 2021 chopar.uz</p>
        </div>
    )
}

export default Footer;
