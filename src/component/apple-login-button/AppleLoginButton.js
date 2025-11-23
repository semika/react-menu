import React from 'react';
import Button from '@mui/material/Button';

const AppleLoginButton = () => {
  const handleAppleAuthSuccess = (response) => {
    // Send response.authorization.code and response.authorization.id_token to your backend
    // Backend will validate and return your app's auth token
    console.log('Apple Auth Success:', response);
  };

  const handleAppleAuthError = (error) => {
    console.error('Apple Auth Error:', error);
  };

  return(
    <div>
         {/* <Button variant="outlined"  href="https://appleid.apple.com/auth/authorize?response_type=code&client_id=mosaic.green.apple.login&redirect_uri=https://supersacred-nonpersonally-danna.ngrok-free.dev/apple-callback&scope=name email&response_mode=form_post">Login With Apple</Button>
     */}
         <Button variant="outlined"      href="https://appleid.apple.com/auth/authorize?response_type=code&client_id=mosaic.green.apple.login&redirect_uri=https://supersacred-nonpersonally-danna.ngrok-free.dev/auth/apple-authoriz-callback&scope=name email&response_mode=form_post">Login With Apple</Button>
   
    
    </div>
)
}

export default AppleLoginButton;