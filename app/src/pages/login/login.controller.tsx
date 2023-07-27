import React, { SetStateAction } from "react";
import { LoginSendData } from "./login.model";

async function loginUser(credentials:  LoginSendData) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const doLogin = (
    username: string,
    password: string, 
    setAcces: React.Dispatch<SetStateAction<string>>) => {
        const token = loginUser({
            username,
            password
        });
        //setAcces("true");
        alert(username + "=" + password);
};

export { doLogin };