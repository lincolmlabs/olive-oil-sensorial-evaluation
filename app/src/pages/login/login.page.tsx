import React, { useState, SetStateAction } from 'react';
import { Header } from "../../components";
import { PrimaryButton } from "../sample-evaluation/sample-evaluation.style";
import { LoginUsernameInput, LoginContainer, LoginButtonsContainer, LoginLeftInnerContainer, LoginRightInnerContainer } from './login.style';
import { LoginProps } from './login.model';
import { doLogin } from "./login.controller";

const Login = (props: LoginProps) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Header />
            <LoginContainer>
                <LoginLeftInnerContainer>
                    <label>Usuário: </label>
                    <label>Senha: </label>
                </LoginLeftInnerContainer>
                <LoginRightInnerContainer>
                    <LoginUsernameInput onChange={(e) => setUserName(e.target.value)} />&nbsp;
                    <LoginUsernameInput onChange={e => setPassword(e.target.value)}/>
                </LoginRightInnerContainer>
            </LoginContainer>
            <LoginButtonsContainer>
                <PrimaryButton onClick={() => doLogin(username, password, props.setAccess)}>Entrar</PrimaryButton>
            </LoginButtonsContainer>
        </>
    );
}

export { Login };