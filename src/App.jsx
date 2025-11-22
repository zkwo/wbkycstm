// src/App.jsx
import React, { useState } from 'react';
// Ambil hook tema dari main.jsx
import { useTheme } from './main.jsx'; 

// --- DATA Mockup ---
const mapData = [
    {
        id: 1,
        title: "Blox Mania: Ultimate Script",
        description: "Script serbaguna untuk Blox Mania, mencakup auto farm, teleports, dan misi otomatis.",
        badges: ["AUTO FARM", "ESP", "AURA BOOST"],
        image: "https://via.placeholder.com/320x180/ff3366/FFFFFF?text=Blox+Mania+Map"
    },
    {
        id: 2,
        title: "Fighter Quest: Pro Tools",
        description: "Alat bantu premium untuk Fighter Quest. Mempercepat level-up dan mendapatkan item langka.",
        badges: ["AUTO QUEST", "NO CLIP", "SPEED HACK"],
        image: "https://via.placeholder.com/320x180/28a745/FFFFFF?text=Fighter+Quest+Map"
    },
    // ... Tambahkan data lain jika perlu
];

// --- Komponen Kartu Produk (Di-embed di App.jsx) ---
const MapCard = ({ map }) => (
    <div className="map-card">
        <div className="map-img" style={{ backgroundImage: `url(${map.image})` }}></div>
        <div className="map-details">
            <h3>{map.title}</h3>
            <p className="map-description">{map.description}</p>
            <div className="badges">
                {map.badges.map((badge, index) => (
                    <span key={index} className="badge">{badge}</span>
                ))}
            </div>
            <button className="btn-secondary">GET KEY CLICK</button>
        </div>
    </div>
);

// --- Komponen HEADER (Di-embed di App.jsx) ---
const SimpleHeader = () => {
    const { toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="glassmorphism-header">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                ☀️/🌙
            </button>
            <div className="header-content">
                <div className="logo">
                    <span>Jinkx Pro</span>
                </div>
                
                <nav className={`desktop-nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={handleLinkClick}>Home</a>
                    <a href="#maps" onClick={handleLinkClick}>Maps</a>
                    <a href="#about" onClick={handleLinkClick}>About Us</a>
                    <a href="#support" onClick={handleLinkClick}>Support</a>
                    <a href="#" className="btn-key" onClick={handleLinkClick}>Get Key</a>
                </nav>

                <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </header>
    );
}

// --- Komponen UTAMA ---
function App() {
    return (
        <>
            <SimpleHeader />

            <main>
                {/* SECTION 1: Key System */}
                <section id="home" className="hero-section section-border">
                    <img src="https://img.icons8.com/nolan/96/key.png" alt="Key System Icon" loading="lazy" style={{ marginBottom: '20px' }} />
                    <h1 style={{ color: 'var(--primary-color)' }}>🔑 JINKX PRO KEY SYSTEM</h1>
                    <p className="description">
                        Sistem Kunci kami memastikan akses **aman, cepat, dan eksklusif** ke alat premium kami. Dapatkan kunci Anda sekarang untuk membuka semua fitur.
                    </p>
                    <button className="btn-primary">GET KEY SEKARANG</button>
                    <p className="small-text" style={{ opacity: 0.8, marginTop: '15px' }}>Proses otentikasi cepat | Diperbarui secara real-time</p>
                </section>

                {/* SECTION 2: Roblox Maps/Product Listing */}
                <section id="maps" className="map-listing-section section-border">
                    <h2 style={{ fontSize: '2.5em' }}>🎮 Roblox Script Manager</h2>
                    <p className="description">
                        Pilih game favorit Anda dan dapatkan akses ke fitur *auto farm*, *ESP*, dan *teleport* terbaik.
                    </p>

                    <div className="map-card-container">
                        {mapData.map(map => (
                            <MapCard key={map.id} map={map} />
                        ))}
                    </div>
                </section>

                {/* SECTION 3: About Us & Support */}
                <section id="about" className="about-support-section section-border">
                    <h2 style={{ fontSize: '2.5em' }}>ℹ️ About Us & Support</h2>
                    <div className="content-wrapper">
                        <div className="about-us">
                            <h3>Tentang Kami</h3>
                            <p>
                                Jinkx Pro didirikan oleh komunitas developer berpengalaman dengan fokus pada *scripting* yang **stabil, aman, dan mudah digunakan**.
                            </p>
                        </div>
                        <div id="support" className="customer-support">
                            <h3>Dukungan Pelanggan</h3>
                            <p>
                                Butuh bantuan dengan kunci atau ada masalah teknis? Tim dukungan kami tersedia **24/7**.
                            </p>
                            <a href="mailto:support@jinkx.pro" className="btn-support">Hubungi Dukungan (Email)</a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>&copy; {new Date().getFullYear()} Jinkx Pro. All Rights Reserved.</p>
                <p>Built with React & Vite.</p>
            </footer>
        </>
    );
}

export default App;
