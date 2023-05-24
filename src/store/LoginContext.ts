import React, {useReducer, useState } from 'react';

const LoginContext = React.createContext({
    isLoggedIn: true
});

export default LoginContext;