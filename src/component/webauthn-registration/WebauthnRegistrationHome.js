import React, {useState} from 'react';
import {registerFidoUser} from "../../service/registration/register-user";


const DEFAULT_USER_EMAIL = 'johndoe@blabla.org'

const WebauthnRegistrationHome = () => {

    const [userInformation, setUserInformation] = useState({
        email: DEFAULT_USER_EMAIL,
        lastName: '',
        firstName: ''
    });

    const registerUser = () => {
        return registerFidoUser(
            {
                email: userInformation.email,
                lastName: userInformation.lastName,
                firstName: userInformation.firstName
            }
        )
    };

    return (
        <div>
            <h1>WebAuthn User Registration Home</h1>
            <p>Welcome to the WebAuthn User Registration Home Page.</p>
        </div>
    );
}

export default WebauthnRegistrationHome;
