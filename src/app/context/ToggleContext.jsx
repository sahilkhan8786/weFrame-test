'use client'
import { createContext, useState } from "react";

export const ToggleContext = createContext({})

export const ToggleContextProvider = ({ children }) => {

    const [isActive, setIsActive] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(true)


    return (<ToggleContext.Provider value={{ isActive, setIsActive, showSearchBar, setShowSearchBar }}>
        {children}
    </ToggleContext.Provider>)
}