import React, { SetStateAction } from "react";
import { LoginSendData } from "./login.model";

async function loginUser(credentials:  LoginSendData, setAcces: React.Dispatch<SetStateAction<string>>) {
    return fetch('https://lfdars.lincolmlabs.cloud/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => { if (data.ok) { return data.json() } else { alert("Acesso não autorizado nesse painel."); return data.json(); }})
    .then(json => { 
      setAcces(json["token"])
      sessionStorage.setItem("token", json["token"]);
    });
}

const doLogin = (
    panel: string,
    username: string,
    password: string, 
    setAcces: React.Dispatch<SetStateAction<string>>) => {
        const token = loginUser({
            panel,
            username,
            password
        }, setAcces);
};

export { doLogin };

