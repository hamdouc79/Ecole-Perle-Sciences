import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Recrutement');

    const menuItems = [
    { label: 'Ecole', path: '/ecole' },
    { label: 'Pédagogie', path: '/pedagogie' },
    { label: 'Scolarité', path: '/scolarite' },
    { label: 'Espace Parent', path: '/espaceParents' },
    { label: 'Recrutement', path: '/recrutement' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link 
                to={item.path}
                className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
                onClick={() => setActiveItem(item.label)}
              >
                {item.label}
                <span className="dropdown-arrow">▼</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    

      <style jsx>{`
        .navbar {
        position: sticky;
         top: 0;
         width: 100%;
         z-index: 1000;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: center; /* ✅ Centrage horizontal */
        }

        .nav-menu {
          display: flex;
          list-style: none;
          padding: 0;
          gap: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 16px 24px;
          text-decoration: none;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          border-bottom: 3px solid transparent;
        }

        .nav-link:hover {
          color: #0ea5e9;
          background-color: #f8fafc;
        }

        .nav-link.active {
          color: #0ea5e9;
          border-bottom-color: #0ea5e9;
        }

        .dropdown-arrow {
          margin-left: 6px;
          font-size: 10px;
          color: #9ca3af;
          transition: transform 0.2s;
        }

        .nav-link:hover .dropdown-arrow {
          transform: rotate(180deg);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .nav-menu {
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            display: none;
          }

          .nav-menu.mobile-open {
            display: flex;
          }

          .nav-link {
            padding: 12px 20px;
            border-bottom: 1px solid #f3f4f6;
          }

          .nav-link.active {
            border-bottom: 1px solid #0ea5e9;
            background-color: #eff6ff;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
