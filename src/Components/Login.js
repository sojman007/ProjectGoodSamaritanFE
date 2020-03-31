import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`

    form {
        position: relative;
    }


    input[type=email] {
        width: 30%;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
    }


    input[type=text] {
        width: 30%;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
    }

    input[type=password] {
        width: 30%;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 16px;
    }

    input[type=submit] {
        padding: 9px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: blue;
    }

    input[type=submit]:hover {
        background-color: #45a049;
      }

    .loginContainer {
        border-radius: 5px;
        background-color: white;
        padding: 10px;
        border-style: solid;
    }

`;


function Login() {
    return(
        
           <Styles className='loginContainer'>

            <form action="email">Email</form>
            <input type="email" placeholder="Input Email"/>

           <form action="userName">Username</form>
            <input type="text" placeholder="Input Username"/>

            <form action="password">Password</form>
            <input type="password" placeholder="Input Password"/>

            <br/>

            <input type="submit" value="Submit"/>
           </Styles> 
           
    )
}

export default Login;