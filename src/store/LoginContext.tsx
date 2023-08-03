import React, {useReducer, useState } from 'react';

const LoginContext = React.createContext({
    isLoggedIn: false,
    login: () => {}
});

const loginReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true
            }
        default:
            return {isLoggedIn: false}
    }
    
}

export const LoginContextProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        console.log("login function");
        setIsLoggedIn(true);
    };

    return (
        <LoginContext.Provider value={{isLoggedIn: isLoggedIn, login}}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContext;