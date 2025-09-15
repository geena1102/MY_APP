// src/components/AjaUniverse.tsx

import React, { useState } from 'react';
import './AjaUniverse.css';
//import Timeline from './Timeline'; 

// --- TypeScript Interfaces ---
// ADDED a 'color' property to define the background for each icon
interface UniverseItem {
  id: string;
  title: string;
  side: 'product' | 'service';
  top: string;
  left: string;
  iconUrl: string;
  description: string;
  color: string; // <-- NEW PROPERTY
}

// --- Data for Universe Items ---
// UPDATED positions and ADDED colors for each item
const universeItems: UniverseItem[] = [
  // Products Universe - Left Side (Organized grid layout)
  { id: 'tickBack', side: 'product', title: 'TickBack', top: '25%', left: '8%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/8832/8832119.png', description: 'Unravel Gross to Net Process to identify all revenue leakages using Pre-trained and setup ML Models.Tickback transforms the process of managing Gross to Net into a continuous loop of analysing, reporting, learning, and optimizing to combat revenue leakage and improve margins.', color: '#e53935' },
  { id: 'vittora1', side: 'product', title: 'Vittora', top: '40%', left: '20%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3439/3439130.png', description: 'A dynamic playground where 3 billion datapoints are crunched every hour, transforming data into actionable insights - fuelling smarter, faster financial decisions.', color: '#1E2D5A' },
  { id: 'tos', side: 'product', title: 'ToS', top: '25%', left: '32%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/1827/1827730.png', description: 'Transport Optimisation Solution that can provide optimal load planning and Monitoring Solution to provide a clear visibility on the Supply Chain activities.', color: '#43A047' },
  { id: 'compliBear', side: 'product', title: 'CompliBear', top: '55%', left: '8%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2823/2823616.png', description: 'Catalyst to transform insights into Innovations using CoSaaS solution and providing Autonomous Control Monitoring.All are resolved using CompliBear solution that helps with a savings of 52% lower losses, 58% faster detection of anomalies and savings of 8730 minutes per month.', color: '#6A1B9A' },
  { id: 'mailVerse', side: 'product', title: 'MailVerse', top: '70%', left: '20%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/893/893292.png', description: 'Analyse and identify critical information based on Digital Forensic Methodologies on your Email files.', color: '#D81B60' },
  { id: 'lawRence', side: 'product', title: 'LawRence', top: '55%', left: '32%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/1041/1041285.png', description: 'Powered by a sophisticated Gen AI model, Lawrence possesses the unique ability to decipher and analyze complex legal language with unparalleled precision. Lawrence is linked to a vast database of laws, precedents, and legal documents, meticulously organized and stored as dense vectors.', color: '#c2850c' },
  { id: 'forensCity', side: 'product', title: 'ForensCity', top: '85%', left: '8%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2942/2942978.png', description: 'Take your pick of the lot from this host of applications that are built using Digital Forensic Standards to analyse any form of data.', color: '#00838F' },
  { id: 'ehs', side: 'product', title: 'EHS', top: '85%', left: '32%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3013/3013234.png', description: 'Using more than 20 Statistical Models and over 50 rule based ratios, prepare a detailed Entity Health Score just based on your trial balance', color: '#556b2f' },

  // Service Universe - Right Side (Matching Products Galaxy 8-icon layout)
  { id: 'genAI', side: 'service', title: 'Gen AI Solutions', top: '25%', left: '68%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/10702/10702279.png', description: 'Generative AI automates repetitive workflows, creates intelligent summaries, and generates insights from large volumes of data. It enables faster analysis, scenario simulation, and natural language interaction with complex datasets. This helps teams focus on strategic decisions while improving efficiency and accuracy.', color: '#E64A19' },
  //{ id: 'dataViz', side: 'service', title: 'Data Visualization', top: '40%', left: '80%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3025/3025735.png', description: 'Data visualization transforms complex financial data into clear, interactive dashboards and charts. It helps reveal patterns, trends, and anomalies quickly, enabling faster decision-making. By making insights easy to understand, it drives collaboration and supports strategic planning.', color: '#AD1457' },
  { id: 'fullStackDS', side: 'service', title: 'Full Stack Datascience', top: '25%', left: '92%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/8099/8099381.png', description: 'Full stack data science in finance delivers end-to-end solutions from data preparation to predictive modeling and visualization. It helps uncover patterns in transactions, forecast revenues, detect risks, and ensure regulatory compliance. This holistic approach empowers financial teams to make strategic, data-driven decisions that drive growth and resilience.', color: '#FBC02D' },
  { id: 'bpa', side: 'service', title: 'Business Process Analysis', top: '55%', left: '68%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/10900/10900010.png', description: 'Business process analysis identifies inefficiencies, bottlenecks, and risks within operations. It provides actionable insights to streamline workflows, improve compliance, and reduce costs. By optimizing processes, it enhances overall efficiency and supports better decision-making', color: '#1565C0' },
  { id: 'secondment', side: 'service', title: 'Secondment Services', top: '53%', left: '80%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/912/912214.png', description: 'Secondment services provide skilled professionals to address short-term talent gaps and deliver critical projects seamlessly. They bring specialized expertise, ensuring business continuity and knowledge transfer. This flexible approach helps organizations stay agile and meet objectives efficiently.', color: '#26d0dcff' },
  { id: 'dataEngineering', side: 'service', title: 'Data Engineering', top: '55%', left: '92%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/8704/8704207.png', description: 'Data engineering plays a key role in finance by enabling seamless collection, integration, and transformation of large volumes of data. It builds reliable pipelines that ensure data accuracy and real-time availability for reporting, forecasting, and compliance. By providing a solid data foundation, data engineering empowers finance teams to make faster, data-driven decisions and uncover actionable insights', color: '#0277BD' },
  { id: 'genAITs', side: 'service', title: 'Gen AITs', top: '85%', left: '68%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/4243/4243303.png', description: 'Gen AI tools streamline data processing, automate repetitive tasks, and generate actionable insights from vast datasets. They enhance productivity by enabling natural language interaction, quick report creation, and intelligent recommendations. This empowers teams to work smarter, make faster decisions, and focus on innovation', color: '#5E35B1' },
  { id: 'dataViz', side: 'service', title: 'Data Visualization', top: '85%', left: '92%', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3025/3025735.png', description: 'Data visualization transforms complex financial data into clear, interactive dashboards and charts. It helps reveal patterns, trends, and anomalies quickly, enabling faster decision-making. By making insights easy to understand, it drives collaboration and supports strategic planning.', color: '#AD1457' },
];

// --- The Main Component ---
const AjaUniverse: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<UniverseItem | null>(null);
  //const [isTimelineVisible, setTimelineVisible] = useState(false);

  const handleItemClick = (item: UniverseItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="universe-container">
      <div className="stars"></div>
      <div className="comets"></div>
      {/* <button className="timeline-button" onClick={() => setTimelineVisible(true)}>
        Timeline
      </button> */} 

      <h1 className="main-title">AJA Universe</h1>

      <div className="universe-labels">
        <h2 className="products-universe-label">Products Galaxy</h2>
        <h2 className="service-universe-label">Service Galaxy</h2>
      </div>

      <div className="items-wrapper">
        {universeItems.map(item => (
          <div
            key={item.id}
            className={`universe-item ${item.side}`}
            style={{ top: item.top, left: item.left }}
            onClick={() => handleItemClick(item)}
          >
            {/* APPLIED the item's color as an inline style */}
            <div className="icon-container" style={{ backgroundColor: item.color }}>
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
              <p>{selectedItem.description}</p>
            </div>
            <div className="modal-footer">
              {(selectedItem.id === 'vittora1' || selectedItem.id === 'compliBear') && (
                <button className="click-tools-button">
                  Click tools
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {/* {isTimelineVisible && <Timeline onClose={() => setTimelineVisible(false)} />} */} 
    </div>
  );
};

export default AjaUniverse;