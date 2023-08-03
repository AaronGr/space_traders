import { useContext, useState } from "react";
import Card from "../UI/Card/Card";
import LoginContext from "../../store/LoginContext";

const Login = (props: any) => {
    const loginCtx = useContext(LoginContext);

    const login = (e) => {
        e.preventDefault();
        loginCtx.login();
    };

    return ( 
        <Card>
            <form >
                <h1>Login</h1>
                <label>Username</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <button type="submit" onClick={login}>Submit</button>
            </form>
        </Card>
    )
};

export default Login;
