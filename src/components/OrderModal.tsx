import React, { useState } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';
import { TruckOption, SandCategory } from '../types/materials';
import { SAND_TYPES, DISPATCH_CONTACT } from '../data/materialsData';
import WhatsAppIcon from './WhatsAppIcon';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTruck: TruckOption;
  selectedSand: SandCategory;
  quantity: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedTruck,
  selectedSand,
  quantity
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [siteLocation, setSiteLocation] = useState('');
  const [landmark, setLandmark] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('Immediate / Today');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const sandObj = SAND_TYPES.find((s) => s.id === selectedSand) || SAND_TYPES[0];
  const totalPrice = selectedTruck.price * quantity;

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const orderText =
      `*🧱 SITE DISPATCH ORDER — KONE BUILD*%0A` +
      `----------------------------------------%0A` +
      `*Customer / Contractor:* ${fullName || 'Client'}%0A` +
      `*Phone Number:* ${phoneNumber}%0A` +
      `*Site Address / Area:* ${siteLocation}%0A` +
      `*Nearby Landmark:* ${landmark || 'Near site'}%0A` +
      `*Delivery Schedule:* ${deliveryDate}%0A` +
      `----------------------------------------%0A` +
      `*Material:* ${sandObj.name}%0A` +
      `*Transport Vehicle:* ${selectedTruck.name} (${selectedTruck.capacityText})%0A` +
      `*Total Trips:* ${quantity} ${quantity === 1 ? 'trip' : 'trips'}%0A` +
      `*Rate Per Trip:* GH₵ ${selectedTruck.price}.00%0A` +
      `*ORDER TOTAL:* GH₵ ${totalPrice.toLocaleString()}.00%0A` +
      (notes ? `*Special Notes:* ${notes}%0A` : '') +
      `----------------------------------------%0A` +
      `_Please confirm availability and dispatch driver._`;

    const whatsappUrl = `https://wa.me/${DISPATCH_CONTACT.phoneRaw}?text=${orderText}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-sheet-header">
          <div>
            <h3 className="modal-sheet-title">Site Dispatch Details</h3>
          </div>
          <button className="modal-close-trigger" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {!isSubmitted ? (
          <>
            <div className="order-recap-box">
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
                  {quantity}x {selectedTruck.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '2px' }}>
                  {sandObj.name} • {selectedTruck.capacityText} ({selectedTruck.tonnageEstimate})
                </div>
                <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-slate" style={{ fontSize: '0.65rem' }}>Haulage Included</span>
                  <span className="badge badge-slate" style={{ fontSize: '0.65rem' }}>Hydraulic Offload</span>
                  <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>Pay On-Site Inspection</span>
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                  OFFICIAL TOTAL
                </div>
                <div style={{ fontWeight: 900, color: 'var(--brand-primary)', fontSize: '1.25rem' }}>
                  GH₵ {totalPrice.toLocaleString()}.00
                </div>
              </div>
            </div>

            <form onSubmit={handleWhatsAppOrder}>
              <div className="modal-form-grid">
                <div className="input-field-group">
                  <label className="input-label">Contractor / Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kwame Mensah"
                    className="text-input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="input-field-group">
                  <label className="input-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 055 199 3820"
                    className="text-input"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-field-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <label className="input-label" style={{ marginBottom: 0 }}>Site Location & Landmark *</label>
                  <div className="quick-zone-chips">
                    {['Kasoa', 'East Legon', 'Tema', 'Amasaman', 'Spintex'].map((zone) => (
                      <button
                        type="button"
                        key={zone}
                        className={`zone-chip ${siteLocation === zone ? 'active' : ''}`}
                        onClick={() => setSiteLocation(zone)}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="modal-form-grid">
                  <input
                    type="text"
                    required
                    placeholder="Site Area / Town (e.g. Kasoa Millennium City)"
                    className="text-input"
                    value={siteLocation}
                    onChange={(e) => setSiteLocation(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Nearby Landmark (e.g. Shell filling station)"
                    className="text-input"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>
                <div className="zone-disclaimer-note">
                  * Standard haulage rates apply to Accra, Kasoa & Tema corridors.
                </div>
              </div>

              <div className="input-field-group">
                <label className="input-label">Preferred Delivery Time</label>
                <select
                  className="select-input"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                >
                  <option value="Immediate / Today (ASAP)">Immediate / Today (ASAP)</option>
                  <option value="Tomorrow Morning (7:00 AM - 11:00 AM)">Tomorrow Morning (7:00 AM - 11:00 AM)</option>
                  <option value="Tomorrow Afternoon (1:00 PM - 5:00 PM)">Tomorrow Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Scheduled Date (Specify in notes)">Scheduled Date (Specify in notes)</option>
                </select>
              </div>

              <div className="input-field-group">
                <label className="input-label">Offload Notes or GPS Pin (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Tip sand inside foundation, or paste Google Maps pin."
                  className="textarea-input"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="modal-action-buttons">
                <button type="submit" className="btn-primary modal-submit-btn">
                  <WhatsAppIcon size={18} color="#000000" />
                  <span>Order via WhatsApp</span>
                </button>
                <a
                  href={`tel:${DISPATCH_CONTACT.phoneRaw}`}
                  className="btn-secondary modal-call-btn"
                  title="Call Hotline"
                  aria-label="Call Hotline"
                >
                  <Phone size={16} />
                </a>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ color: '#10b981', marginBottom: '0.75rem' }}>
              <CheckCircle2 size={42} style={{ margin: '0 auto' }} />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem' }}>
              Dispatch Request Sent!
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Your order details were sent to the site dispatch coordinator. You will receive immediate confirmation.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
              >
                Done
              </button>
              <a href={`tel:${DISPATCH_CONTACT.phoneRaw}`} className="btn-secondary">
                <Phone size={15} />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
