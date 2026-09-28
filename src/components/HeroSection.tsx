import React from 'react';
import { ShieldCheck, Truck, Clock, CheckCircle2, Phone, ArrowDown } from 'lucide-react';
import { DISPATCH_CONTACT } from '../data/materialsData';
import WhatsAppIcon from './WhatsAppIcon';

interface HeroSectionProps {
  onScrollToCalculator: () => void;
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToCalculator,
  onOpenOrderModal
}) => {
  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="hero-main-layout">
          <div>
            <div className="hero-tag">
              <span className="live-status-dot" />
              <span>In-Stock For Immediate Site Dispatch</span>
            </div>

            <h1 className="hero-headline">
              Construction Sand, Delivered to Your Site.
            </h1>

            <p className="hero-desc">
              Clean river sand dispatched across Greater Accra, Kasoa & Tema. Honest volume with pay-on-arrival inspection.
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary hero-main-btn" onClick={onScrollToCalculator}>
                <span>Select Truck & Rates</span>
                <ArrowDown size={15} />
              </button>
              <div className="hero-secondary-btns">
                <a
                  href={`https://wa.me/${DISPATCH_CONTACT.phoneRaw}?text=${encodeURIComponent('Hello Kone Build! 🧱 I would like to order sand delivery to my site.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hero-sub-btn"
                >
                  <WhatsAppIcon size={15} color="#25D366" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${DISPATCH_CONTACT.phoneRaw}`}
                  className="btn-secondary hero-sub-btn"
                >
                  <Phone size={14} />
                  <span>Call Dispatch</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-banner-card">
            <img
              src="/images/hero-delivery.jpg"
              alt="Commercial tipper truck offloading clean sharp river sand"
              className="hero-banner-img"
            />
            <div className="hero-banner-overlay">
              <div className="hero-banner-title">Live Site Dispatch • Clean Sharp Sand</div>
            </div>
          </div>
        </div>

        <div className="trust-pills-bar">
          <div className="trust-pill-item">
            <ShieldCheck size={16} style={{ color: 'var(--brand-primary)' }} />
            <span>Level-Bed Volume Guarantee</span>
          </div>
          <div className="trust-pill-item">
            <CheckCircle2 size={16} style={{ color: '#10b981' }} />
            <span>Zero Silt Washed Sand</span>
          </div>
          <div className="trust-pill-item">
            <Clock size={16} style={{ color: 'var(--brand-primary)' }} />
            <span>Same-Day Site Dispatch</span>
          </div>
          <div className="trust-pill-item">
            <Truck size={16} style={{ color: 'var(--brand-primary)' }} />
            <span>Pay on Site Inspection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
