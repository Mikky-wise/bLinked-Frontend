import React, { createContext, useState } from 'react';
// import jwtDecode from 'jwt-decode';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [toastData, setToastData] = useState({ open: true, text: "A new Agent has been added successfully!", color: '#E6FFEB' });

    return <GlobalContext.Provider value={{ toastData, setToastData }}>
        {children}
    </GlobalContext.Provider>
};