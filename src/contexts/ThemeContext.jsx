import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", isDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }
    const theme = {
        isDark,
        toggleTheme,
        background: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000"
    }
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}