import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [toastData, setToastData] = useState({ open: false, text: "", color: '#E6FFEB' });

    return <GlobalContext.Provider value={{ toastData, setToastData }}>
        {children}
    </GlobalContext.Provider>
};