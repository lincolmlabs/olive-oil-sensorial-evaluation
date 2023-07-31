import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Header } from "../../components";
import { PrimaryButton } from "../sample-evaluation/sample-evaluation.style";
import { doLogin } from "./login.controller";
import { LoginProps } from './login.model';
import { LoginButtonsContainer, LoginContainer, LoginLeftInnerContainer, LoginRightInnerContainer, LoginUsernameInput } from './login.style';

const Login = (props: LoginProps) => {
    const query = new URLSearchParams(useLocation().search);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let p = query.get("ps");
    
    return (
        <>
            <Header />
            <LoginContainer>
                <LoginLeftInnerContainer>
                    <label>Chave de Acesso: </label>
                    {/*<label>Senha: </label>*/}
                </LoginLeftInnerContainer>
                <LoginRightInnerContainer>
                    <LoginUsernameInput onChange={(e) => setUserName(e.target.value)} />&nbsp;
                    {/*<LoginUsernameInput onChange={e => setPassword(e.target.value)}/>*/}
                </LoginRightInnerContainer>
            </LoginContainer>
            <LoginButtonsContainer>
                <PrimaryButton onClick={() => doLogin(p === null ? "" : p, username, password, props.setAccess)}>Entrar</PrimaryButton>
            </LoginButtonsContainer>
        </>
    );
}

export { Login };
