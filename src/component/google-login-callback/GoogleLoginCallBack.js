import React from "react";
import Button from '@mui/material/Button';
import { useSearchParams } from "react-router-dom";
const GoogleLoginCallBack = (response) => {
    const [searchParams, setSearchParams] = useSearchParams();
    //const auth_code = searchParams.get("code")
    const userSub = searchParams.get("sub")
    const firstName = searchParams.get("firstName")
    const lastName = searchParams.get("lastName")
    const email = searchParams.get("email")

    const userdata = JSON.stringify({
      userSub: userSub,
      firstName: firstName,
      lastName: lastName,
      email: email  
    })

    // Invoke back end API to exchange auth code for access token
    // Simple POST request with a JSON body using fetch
    exchangeToken(userdata); 
    console.log(userdata);
    console.log("Registration successful..." + userdata);
  }

 const exchangeToken = async (userdata) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { 
          code: userdata, 
          socialLoginProvier: "google"
        })
    };
    try {
      const response = await fetch('http://localhost:8080/auth/register-user', requestOptions);
      const data = await response.json();
      console.log('User registration successful:', data);
    } catch (error) {
      console.error('Error registering user', error);
    }
  } 
export default GoogleLoginCallBack;