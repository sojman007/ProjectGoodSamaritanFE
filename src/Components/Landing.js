import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
#title {
    background-image: url(https://images.unsplash.com/photo-1585251172245-4e87f155fc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80);
    text-align: center;
    color: #efefef
    font-family: 'Montserrat', sans-serif;
}

.container {
    padding: 3% 15% 34%;
}



.
`;

class Landing extends Component {
    render() {
        return(
            <Styles>
            <div id='title'>
                <div className='container'>
                    <h1 className='top-title'>Welcome to Project Good Samaritan Page.</h1>
                    <p className='top-paragraph'>Your hub for every lost and found items</p>
                </div>
                    
                </div>
                   
            
            </Styles>
                

            
        )
    }
}

export default Landing;



