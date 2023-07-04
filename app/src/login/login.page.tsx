import React, { useEffect, useRef, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const handleLogin = (response:any) => {
    console.log(response);
}

function LoginPage() {
    return (
        <GoogleOAuthProvider clientId="46654196911-4a3qn7kqn846eus81ce0fmlmni56n6j7.apps.googleusercontent.com">
           <GoogleLogin onSuccess={handleLogin} />
        </GoogleOAuthProvider>
    );
}

export { LoginPage as Login };