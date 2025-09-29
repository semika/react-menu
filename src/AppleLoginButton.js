import React from 'react';
import { useEffect, useState } from 'react';
import AppleLogin from 'react-apple-login';

const AppleLoginButton = () => {
  const [appleScriptLoaded, setAppleScriptLoaded] = useState(false);
  const handleAppleAuthSuccess = (response) => {
    // Send response.authorization.code and response.authorization.id_token to your backend
    // Backend will validate and return your app's auth token
    console.log('Apple Auth Success:', response);
  };

  const handleAppleAuthError = (error) => {
    console.error('Apple Auth Error:', error);
  };

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
  //   script.async = true;
  //   script.onload = () => setAppleScriptLoaded(true);
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // if (!appleScriptLoaded) {
  //   return <div>Loading Apple Sign In...</div>;
  // }

  // if (appleScriptLoaded) {
  //   AppleID.auth.init({
  //     clientId : 'mosaic.green.apple.login',
  //     scope : 'name email',
  //     redirectURI : 'https://supersacred-nonpersonally-danna.ngrok-free.dev/apple-callback',
  //     //state : '[STATE]',
  //     //nonce : '[NONCE]',
  //     usePopup : true
  //   });
  // }

  <AppleLogin
    clientId="YOUR_CLIENT_ID"
    redirectURI="YOUR_REDIRECT_URL"
    usePopup={true}
    //callback={this.appleResponse} // Catch the response
    scope="email name"
    responseMode="query"
    render={renderProps => (  //Custom Apple Sign in Button
              <button
                onClick={renderProps.onClick}
                style={{
                      backgroundColor: "white",
                      padding: 10,
                      border: "1px solid black",
                      fontFamily: "none",
                      lineHeight: "25px",
                      fontSize: "25px"
                    }}
                  >
                    <i className="fa-brands fa-apple px-2 "></i>
                    Continue with Apple
              </button>
                )}
  />
}

export default AppleLoginButton;