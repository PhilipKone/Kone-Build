import React from 'react';
import { HardHat, Phone, Mail, MapPin } from 'lucide-react';
import { DISPATCH_CONTACT } from '../data/materialsData';
import WhatsAppIcon from './WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', paddingBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f59e0b', color: '#090d16', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HardHat size={18} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                KONE BUILD
              </span>
            </div>
            <p style={{ color: '#8492a6', fontSize: '0.84rem', lineHeight: 1.6, maxWidth: '340px' }}>
              Reliable supply and site logistics for verified building sand, concrete aggregates, and heavy structural materials across Ghana.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.86rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Direct Site Coordination
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.84rem' }}>
              <a href={`tel:${DISPATCH_CONTACT.phoneRaw}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
                <Phone size={14} color="#f59e0b" />
                <span>{DISPATCH_CONTACT.phoneDisplay}</span>
              </a>
              <a href={DISPATCH_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
                <WhatsAppIcon size={14} color="#25D366" />
                <span>{DISPATCH_CONTACT.phoneDisplay}</span>
              </a>
              <a href={`mailto:${DISPATCH_CONTACT.dispatchEmail}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
                <Mail size={14} color="#f59e0b" />
                <span>{DISPATCH_CONTACT.dispatchEmail}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8492a6' }}>
                <MapPin size={14} color="#f59e0b" />
                <span>{DISPATCH_CONTACT.serviceAreas}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-inner" style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            © {new Date().getFullYear()} Kone Build. A division of{' '}
            <a href="https://www.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: 600 }}>
              Kone Academy
            </a>
            .
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="https://farms.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: '#8492a6' }}>Kone Farms</a>
            <a href="https://code.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: '#8492a6' }}>Kone Code</a>
            <a href="https://warp.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: '#8492a6' }}>Kone Warp</a>
            <a href="https://shop.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: '#8492a6' }}>Kone Shop</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
