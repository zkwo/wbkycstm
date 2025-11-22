// src/components/Header.jsx
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
    const { toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        // Tutup menu saat link diklik (khusus mobile)
        setIsMenuOpen(false);
    }

    return (
        <header className="glassmorphism-header">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                ☀️/🌙
            </button>
            <div className="header-content">
                <div className="logo">
                    {/* Ganti dengan logo asli jika ada */}
                    <span>Jinkx Pro</span>
                </div>
                
                <nav className={`desktop-nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={handleLinkClick}>Home</a>
                    <a href="#maps" onClick={handleLinkClick}>Maps</a>
                    <a href="#about" onClick={handleLinkClick}>About Us</a>
                    <a href="#support" onClick={handleLinkClick}>Support</a>
                    <a href="#" className="btn-key" onClick={handleLinkClick}>Get Key</a>
                </nav>

                {/* Tombol Garis Tiga (Hamburger) */}
                <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            
            <style jsx="true">{`
                /* CSS Khusus untuk Header (Diinjeksi di sini untuk Glassmorphism) */
                .glassmorphism-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 10px 5%;
                    z-index: 1000;
                    /* Glassmorphism Effect */
                    background: var(--glass-bg);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    border-bottom: 1px solid var(--glass-border);
                    box-shadow: 0 4px 30px var(--shadow-color);
                }
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .logo {
                    font-size: 1.5em;
                    font-weight: bold;
                    color: var(--primary-color);
                }
                .desktop-nav a {
                    margin-left: 20px;
                    padding: 8px 10px;
                    border-radius: 5px;
                }
                .desktop-nav a:hover:not(.btn-key) {
                    color: var(--primary-color);
                }
                .btn-key {
                    background-color: var(--primary-color);
                    color: var(--bg-color);
                    padding: 8px 15px;
                    border-radius: 5px;
                    font-weight: bold;
                    margin-left: 30px;
                    transition: background-color 0.3s;
                }
                .btn-key:hover {
                    background-color: #ff5588;
                }

                /* Mobile/Hamburger */
                .menu-toggle {
                    display: none; 
                    cursor: pointer;
                }
                .menu-toggle .bar {
                    width: 25px;
                    height: 3px;
                    background-color: var(--text-color);
                    margin: 5px 0;
                    transition: 0.4s;
                }
                
                @media (max-width: 768px) {
                    .menu-toggle {
                        display: block; 
                    }
                    .desktop-nav {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 65px; 
                        right: 5%;
                        width: 90%;
                        background: var(--secondary-bg);
                        border: 1px solid var(--glass-border);
                        border-radius: 8px;
                        padding: 10px 0;
                        box-shadow: 0 8px 16px var(--shadow-color);
                    }
                    .desktop-nav.active {
                        display: flex;
                    }
                    .desktop-nav a {
                        margin: 5px 0;
                        padding: 12px 20px;
                        border-bottom: 1px solid var(--border-color);
                        width: 100%;
                        margin-left: 0;
                    }
                    .desktop-nav a:last-child {
                        border-bottom: none;
                    }
                }
            `}</style>
        </header>
    );
}

export default Header;
