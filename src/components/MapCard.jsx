// src/components/MapCard.jsx
import React from 'react';

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
        
        <style jsx="true">{`
             .map-card {
                background: var(--secondary-bg);
                border: 1px solid var(--glass-border);
                border-radius: 12px;
                overflow: hidden;
                width: 320px;
                text-align: left;
                transition: transform 0.3s, box-shadow 0.3s;
                box-shadow: 0 5px 15px var(--shadow-color);
            }

            .map-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 15px 30px var(--shadow-color);
            }

            .map-card .map-img {
                width: 100%;
                height: 180px;
                background-color: #333; /* Placeholder */
                background-size: cover;
                background-position: center;
                border-bottom: 1px solid var(--border-color);
            }

            .map-details {
                padding: 20px;
            }

            .map-details h3 {
                color: var(--primary-color);
                margin-top: 0;
            }
            .badges {
                min-height: 25px;
            }
        `}</style>
    </div>
);

export default MapCard;
