// src/main.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css'; 

// --- BAGIAN CONTEXT API (HARUS DIEKSPOR) ---

// 1. Definisikan Context dan Export
export const ThemeContext = createContext();

// 2. Custom Hook (HARUS DIEKSPOR AGAR BISA DIIMPOR OLEH App.jsx)
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider
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
