import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
#footer {
    text-align: center;
    padding: 7% 15%;
}

.footerParagraph {
    color: #8f8f8f;
    font-family: 'Montserrat', sans-serif;
}

.icon {
    margin: 20px 10px;
}

`;



const year = new Date().getFullYear();

function Footer() {
    return(
        <Styles>
            <div id='footer'>
            <i className="fab icon fa-twitter"></i>
            <i className="fab icon fa-facebook-f"></i>
            <i className="fab icon fa-instagram"></i>
            <i className="far icon fa-envelope"></i>
            <p className='footerParagraph'>Copyright © Project Good Samaritan, {year}</p>
            </div>
            
        </Styles>
    )
}

export default Footer;