// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx'; // <-- Import dari file baru
import './style.css'; 

// Hapus semua kode createContext, useTheme, dan ThemeProvider yang lama dari sini!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
