import { LoginSendData } from "./login.model";

function loginUser(credentials:  LoginSendData) {
    return fetch('https://lfdars.lincolmlabs.cloud/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => { if (data.ok) { return data.json() } else { alert("Acesso não autorizado nesse painel."); return data.json(); }})
    .then(json => { return json["token"] });
}

const doLogin = async (
    panel: string,
    username: string,
    password: string) => {
        const token = await loginUser({
            panel,
            username,
            password
        });
        if (token) {
          sessionStorage.setItem("token", token);
        }
      return token;
};

export { doLogin };

