"use client";
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const getFromLocalStorage = () => {

    try{
        if(typeof window !== "undefined"){
            return localStorage.getItem("theme") || "light";
        } 
    } catch(e){
        console.warn("LocalStorage Access Failed", e);
    }
    return "light";
};

export const ThemeContextProvider = ({ children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        setTheme(getFromLocalStorage());
        document.documentElement.classList.toggle(getFromLocalStorage());
    },[]);

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark");  
    },[theme]);

    return (
    <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
    );
}