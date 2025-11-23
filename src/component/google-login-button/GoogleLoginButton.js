import React from "react";
import Button from '@mui/material/Button';
const GoogleLoginButton = () => {

    const loginWithGoogle = () => {
        alert("Google Login Clicked");
    }

    return(
        <div>
            {/* <Button variant="outlined"  
              href="https://accounts.google.com/o/oauth2/v2/auth?client_id=304677613464-1a3fdbp3kpg9afuu8jdv13860i4gk2f9.apps.googleusercontent.com&redirect_uri=http://localhost:3000/google-callback&response_type=code&scope=openid email profile">Login With Google</Button>
         */}
        <Button variant="outlined"  
              href="https://accounts.google.com/o/oauth2/v2/auth?client_id=304677613464-1a3fdbp3kpg9afuu8jdv13860i4gk2f9.apps.googleusercontent.com&redirect_uri=https://supersacred-nonpersonally-danna.ngrok-free.dev/auth/google-authoriz-callback&response_type=code&scope=openid email profile&response_mode=form_post">Login With Google</Button>
       
        </div>
    )

}
export default GoogleLoginButton;