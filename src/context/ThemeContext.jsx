// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Definisikan Context dan Export
export const ThemeContext = createContext();

// 2. Custom Hook (Harus diexport)
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider (Harus diexport)
export const ThemeProvider = ({ children }) => {
    // Default: dark
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        // Menerapkan kelas di body
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
