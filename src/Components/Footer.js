import React from 'react';


const year = new Date().getFullYear();

function Footer() {
    return(
       
            <div id='footer'>
            <i className="fab icon fa-twitter"></i>
            <i className="fab icon fa-facebook-f"></i>
            <i className="fab icon fa-instagram"></i>
            <i className="far icon fa-envelope"></i>
            <p className='footerParagraph'>Copyright © Project Good Samaritan, {year}</p>
            </div>
            
        
    )
}

export default Footer;