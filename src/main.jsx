// src/main.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import CSS global yang akan kita buat di file terpisah (style.css)
import './style.css'; 

// --- 1. THEME CONTEXT PALING SEDERHANA ---
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Default: dark
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

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

// --- RENDER APLIKASI ---
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// Export custom hook agar bisa digunakan di App.jsx
export const useTheme = () => useContext(ThemeContext);
