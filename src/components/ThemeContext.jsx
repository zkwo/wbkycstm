// src/components/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Buat Context
const ThemeContext = createContext();

// 2. Provider Komponen
export const ThemeProvider = ({ children }) => {
    // Ambil tema dari localStorage atau default ke 'dark'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    // Efek untuk menyimpan tema di localStorage dan menerapkan kelas di body
    useEffect(() => {
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

// 3. Custom Hook untuk mempermudah penggunaan
export const useTheme = () => useContext(ThemeContext);
