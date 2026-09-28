import React, { useState } from 'react';
import { HardHat, Phone, MapPin, LayoutGrid } from 'lucide-react';
import { DISPATCH_CONTACT } from '../data/materialsData';
import AppLauncher from './AppLauncher';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [showLauncher, setShowLauncher] = useState(false);

  return (
    <header className="app-header">
      <div className="container header-container">
        {/* Left: Brand */}
        <div className="brand-wrapper">
          <div className="brand-symbol">
            <HardHat size={20} />
          </div>
          <div className="brand-text-col">
            <div className="brand-title">
              KONE BUILD
              <span className="brand-badge">SUPPLY</span>
            </div>
            <div className="brand-location-sub">Accra • Kasoa • Tema</div>
          </div>
        </div>

        {/* Center: Service Area Pill */}
        <div className="header-center-info">
          <div className="service-area-pill">
            <MapPin size={14} color="#f59e0b" />
            <span>Delivering across Greater Accra, Kasoa & Tema</span>
          </div>
        </div>

        {/* Right: Hotline & Actions */}
        <div className="header-actions">
          <a
            href={`tel:${DISPATCH_CONTACT.phoneRaw}`}
            className="hotline-link"
            title={`Call Dispatch: ${DISPATCH_CONTACT.phoneDisplay}`}
            aria-label="Call Dispatch Hotline"
          >
            <Phone size={15} />
            <span className="hotline-text">{DISPATCH_CONTACT.phoneDisplay}</span>
          </a>

          <div style={{ position: 'relative' }}>
            <button
              className="btn-secondary ecosystem-btn"
              onClick={() => setShowLauncher(!showLauncher)}
              title="Kone Academy Ecosystem"
              aria-label="Ecosystem Apps"
            >
              <LayoutGrid size={16} />
              <span className="ecosystem-text">Ecosystem</span>
            </button>
            {showLauncher && <AppLauncher onClose={() => setShowLauncher(false)} />}
          </div>

          <button className="btn-primary header-order-btn" onClick={onOpenOrderModal}>
            <span>Order Sand</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
