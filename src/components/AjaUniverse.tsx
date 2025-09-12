// src/components/AjaUniverse.tsx

import React, { useState } from 'react';
import './AjaUniverse.css';

// --- TypeScript Interfaces ---
// This defines the shape of our data for each clickable item.
interface UniverseItem {
  id: string;
  title: string;
  side: 'product' | 'service';
  top: string;
  left: string;
  iconUrl: string; // We'll use URLs for icons for better quality
  description: string;
  secondaryDescription: string;
}

// --- Data for Universe Items ---
// Using an array makes the code clean and easy to manage.
const universeItems: UniverseItem[] = [
  // Products Universe
  { id: 'compliBear', side: 'product', title: 'CompliBear', top: '55%', left: '15%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2823/2823616.png', description: 'Comprehensive compliance analysis for modern enterprises.', secondaryDescription: 'Integrate our team to bolster your compliance efforts.' },
  { id: 'vittora1', side: 'product', title: 'Vittora', top: '30%', left: '25%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3439/3439130.png', description: 'Advanced analytics platform for data-driven growth.', secondaryDescription: 'Get expert assistance to maximize your Vittora insights.' },
  { id: 'eywa', side: 'product', title: 'EYWA Vault', top: '60%', left: '30%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055653.png', description: 'A secure, decentralized data vault for sensitive assets.', secondaryDescription: 'Consult with our security experts for seamless integration.' },
  { id: 'vittora2', side: 'product', title: 'Vittora', top: '80%', left: '25%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921990.png', description: 'Custom reporting and workflow automation tool.', secondaryDescription: 'Tailor Vittora to your exact business process needs with our team.' },

  // Service Universe
  { id: 'dataEngineering', side: 'service', title: 'Data Engineering', top: '30%', left: '70%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/8704/8704207.png', description: 'Building robust and scalable data pipelines for your business.', secondaryDescription: 'Our engineers can join your team to accelerate projects.' },
  { id: 'genAI', side: 'service', title: 'Gen AI Solutions', top: '40%', left: '85%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/10702/10702279.png', description: 'Develop and deploy cutting-edge Generative AI models.', secondaryDescription: 'Leverage our AI specialists to innovate faster.' },
  { id: 'dataViz', side: 'service', title: 'Data Visualization', top: '55%', left: '78%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3025/3025735.png', description: 'Transform complex data into beautiful, intuitive dashboards.', secondaryDescription: 'On-demand data visualization experts at your service.' },
  { id: 'secondment', side: 'service', title: 'Secondment Services', top: '75%', left: '65%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/912/912214.png', description: 'Place our skilled professionals directly into your teams.', secondaryDescription: 'Flexible staffing solutions to meet your project demands.' },
  { id: 'bpa', side: 'service', title: 'Business Process Analysis', top: '68%', left: '88%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/10900/10900010.png', description: 'Identify inefficiencies and optimize your workflows.', secondaryDescription: 'Our analysts provide actionable insights for process improvement.' },
  { id: 'genAITs', side: 'service', title: 'Gen AITs', top: '90%', left: '75%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/4243/4243303.png', description: 'General AI tools and infrastructure support.', secondaryDescription: 'We provide the foundational support for your AI initiatives.' },
];

// --- The Main Component ---
const AjaUniverse: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<UniverseItem | null>(null);

  const handleItemClick = (item: UniverseItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="universe-container">
      <div className="stars"></div>
      {/* <div className="nebula"></div> */}
      <div className="comets"></div>

      <h1 className="main-title">AJA Universe</h1>

      <div className="universe-labels">
        <h2 className="products-universe-label">Products Universe</h2>
        <h2 className="service-universe-label">Service Universe</h2>
      </div>

      <div className="items-wrapper">
        {universeItems.map(item => (
          <div
            key={item.id}
            className={`universe-item ${item.side}`}
            style={{ top: item.top, left: item.left }}
            onClick={() => handleItemClick(item)}
          >
            <div className="icon-container">
              <img src={item.iconUrl} alt={item.title} className="item-icon" />
            </div>
            <span className="item-label">{item.title}</span>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="hamburger-icon">☰</div>
              <h3 className="modal-title">{selectedItem.title}</h3>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <h4>Risk Consulting</h4>
              <p>{selectedItem.description}</p>
              <h4>Secondment Services</h4>
              <p>{selectedItem.secondaryDescription}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-action-button">Click tools</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AjaUniverse;