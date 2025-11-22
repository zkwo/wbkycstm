// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MapCard from './components/MapCard';
import './styles/main.css'; 

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
    {
        id: 3,
        title: "Defense Tycoon: Advanced",
        description: "Script canggih untuk memenangkan Defense Tycoon dengan mudah dan efisien.",
        badges: ["INSTANT WIN", "MONEY BOOST", "SAFE"],
        image: "https://via.placeholder.com/320x180/007bff/FFFFFF?text=Defense+Tycoon+Map"
    }
];


function App() {
    return (
        <>
            <Header />

            <main>
                {/* SECTION 1: Key System */}
                <section id="home" className="hero-section section-border">
                    <img src="https://img.icons8.com/nolan/96/key.png" alt="Key System Icon" loading="lazy" style={{ marginBottom: '20px' }} />
                    <h1>🔑 JINKX PRO KEY SYSTEM</h1>
                    <p className="description">
                        Sistem Kunci kami memastikan akses **aman, cepat, dan eksklusif** ke alat premium kami. Dapatkan kunci Anda sekarang untuk membuka semua fitur dan mendominasi permainan.
                    </p>
                    <button className="btn-primary">GET KEY SEKARANG</button>
                    <p className="small-text" style={{ opacity: 0.8, marginTop: '15px' }}>Proses otentikasi cepat | Diperbarui secara real-time</p>
                </section>

                {/* SECTION 2: Roblox Maps/Product Listing */}
                <section id="maps" className="map-listing-section section-border">
                    <h2>🎮 Roblox Script Manager</h2>
                    <p className="description">
                        Pilih game favorit Anda dan dapatkan akses ke fitur *auto farm*, *ESP*, dan *teleport* terbaik di kelasnya.
                    </p>

                    <div className="map-card-container">
                        {mapData.map(map => (
                            <MapCard key={map.id} map={map} />
                        ))}
                    </div>
                </section>

                {/* SECTION 3: About Us & Support */}
                <section id="about" className="about-support-section section-border">
                    <h2>ℹ️ About Us & Support</h2>
                    <div className="content-wrapper">
                        <div className="about-us">
                            <h3>Tentang Kami</h3>
                            <p>
                                Jinkx Pro didirikan oleh komunitas developer berpengalaman dengan fokus pada *scripting* yang **stabil, aman, dan mudah digunakan**. Kami selalu berusaha memberikan yang terbaik bagi pengguna kami.
                            </p>
                        </div>
                        <div id="support" className="customer-support">
                            <h3>Dukungan Pelanggan</h3>
                            <p>
                                Ada masalah dengan kunci Anda, instalasi, atau menemukan *bug*? Tim dukungan kami tersedia **24/7** untuk membantu Anda dengan cepat melalui Discord atau Email.
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
