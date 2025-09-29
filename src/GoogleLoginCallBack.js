import React from "react";
import Button from '@mui/material/Button';
import { useSearchParams } from "react-router-dom";
const GoogleLoginCallBack = (response) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const auth_code = searchParams.get("code")

    // Invoke back end API to exchange auth code for access token
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: auth_code })
    };
    fetch('http://localhost:8080/auth/exchange-token', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
      
    console.log(auth_code);
    alert("Login successful...");
  }
export default GoogleLoginCallBack;