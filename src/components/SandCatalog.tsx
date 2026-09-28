import React from 'react';
import { Check, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { TRUCK_OPTIONS, SAND_TYPES } from '../data/materialsData';
import { SandCategory, TruckOption } from '../types/materials';

interface SandCatalogProps {
  selectedTruck: TruckOption;
  selectedSand: SandCategory;
  quantity: number;
  onSelectTruck: (truck: TruckOption) => void;
  onSelectSand: (sand: SandCategory) => void;
  onQuantityChange: (qty: number) => void;
  onOpenOrderModal: () => void;
}

export const SandCatalog: React.FC<SandCatalogProps> = ({
  selectedTruck,
  selectedSand,
  quantity,
  onSelectTruck,
  onSelectSand,
  onQuantityChange,
  onOpenOrderModal
}) => {
  const currentSandObj = SAND_TYPES.find((s) => s.id === selectedSand) || SAND_TYPES[0];
  const totalPrice = selectedTruck.price * quantity;
  const [isDockVisible, setIsDockVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('sand-pricing');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Show dock when the sand-pricing section is reached or scrolled into view
      setIsDockVisible(rect.top <= window.innerHeight * 0.85);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sand-pricing" className="config-section">
      <div className="container">
        {/* Step 1: Clean Segmented Sand Grade Control */}
        <div className="section-label-group">
          <div className="section-tag">Step 1 • Material</div>
          <h2 className="section-title">Select Sand Grade</h2>
        </div>

        <div className="grade-selector-container">
          <div className="segmented-control">
            {SAND_TYPES.map((sand) => {
              const isActive = selectedSand === sand.id;
              return (
                <button
                  key={sand.id}
                  className={`segmented-option ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectSand(sand.id)}
                >
                  {isActive && <Check size={16} color="#f59e0b" />}
                  <span>{sand.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grade-sub-note">
            <span>Ideal for: <strong>{currentSandObj.recommendedUse}</strong></span>
          </div>
        </div>

        {/* Step 2: Vehicle Fleet Cards */}
        <div className="section-label-group" style={{ marginTop: '2.5rem' }}>
          <div className="section-tag">Step 2 • Transport</div>
          <h2 className="section-title">Select Vehicle & Rate</h2>
        </div>

        {/* Tier 1: Residential & Standard Access (3 Cards) */}
        <div className="fleet-tier-label">
          <span>Residential & Compound Haulage</span>
          <span className="fleet-tier-badge">Narrow Roads & Compounds</span>
        </div>
        <div className="fleet-grid fleet-grid-standard">
          {TRUCK_OPTIONS.filter((t) => t.tier === 'standard').map((truck) => {
            const isSelected = selectedTruck.id === truck.id;

            return (
              <div
                key={truck.id}
                className={`fleet-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => onSelectTruck(truck)}
              >
                <div className="fleet-card-media">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="fleet-card-img"
                  />
                  <span className="fleet-tonnage-tag">{truck.tonnageEstimate}</span>
                  {truck.badge && (
                    <div className="fleet-popular-tag">
                      <span className={`badge ${truck.isPopular ? 'badge-amber' : 'badge-slate'}`}>
                        {truck.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="fleet-card-body">
                  <div className="fleet-header">
                    <h3 className="fleet-name">{truck.name}</h3>
                  </div>

                  <div className="fleet-specs-row">
                    <span>{truck.capacityText}</span>
                    <span className="spec-dot">•</span>
                    <span>{truck.gateAccess}</span>
                  </div>

                  <div className="fleet-card-footer">
                    <span className="price-val">GH₵ {truck.price.toLocaleString()}</span>

                    <button
                      className={`fleet-select-btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTruck(truck);
                      }}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tier 2: Commercial Bulk Tippers (2 Cards - 50/50 balance) */}
        <div className="fleet-tier-label" style={{ marginTop: '2rem' }}>
          <span>Heavy Commercial & Bulk Tippers</span>
          <span className="fleet-tier-badge">Foundations & Slabs • Maximum Volume</span>
        </div>
        <div className="fleet-grid fleet-grid-bulk">
          {TRUCK_OPTIONS.filter((t) => t.tier === 'bulk').map((truck) => {
            const isSelected = selectedTruck.id === truck.id;

            return (
              <div
                key={truck.id}
                className={`fleet-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => onSelectTruck(truck)}
              >
                <div className="fleet-card-media">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="fleet-card-img"
                  />
                  <span className="fleet-tonnage-tag">{truck.tonnageEstimate}</span>
                  {truck.badge && (
                    <div className="fleet-popular-tag">
                      <span className={`badge ${truck.isPopular ? 'badge-amber' : 'badge-slate'}`}>
                        {truck.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="fleet-card-body">
                  <div className="fleet-header">
                    <h3 className="fleet-name">{truck.name}</h3>
                  </div>

                  <div className="fleet-specs-row">
                    <span>{truck.capacityText}</span>
                    <span className="spec-dot">•</span>
                    <span>{truck.gateAccess}</span>
                  </div>

                  <div className="fleet-card-footer">
                    <span className="price-val">GH₵ {truck.price.toLocaleString()}</span>

                    <button
                      className={`fleet-select-btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTruck(truck);
                      }}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fair Inspection & Payment Guarantee */}
        <div className="inspection-guarantee-banner">
          <ShieldCheck size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
          <div className="guarantee-text-block">
            <strong>Pay on Site Inspection:</strong> Inspect sand quality and full level-bed volume on arrival before payment.
          </div>
          <div className="guarantee-payment-methods">
            <span className="pay-method-tag">MTN MoMo</span>
            <span className="pay-method-tag">Telecel Cash</span>
            <span className="pay-method-tag">Cash</span>
          </div>
        </div>
      </div>

      {/* Mobbin Sticky Checkout Dock */}
      <div className={`checkout-bar-container ${isDockVisible ? 'visible' : ''}`}>
        <div className="container checkout-bar-inner">
          <div className="checkout-meta">
            <div className="checkout-truck-info">
              <h4>
                <span className="dock-truck-desktop">{selectedTruck.name}</span>
                <span className="dock-truck-mobile">
                  {selectedTruck.id === 'kia-medium' ? 'Kia Bongo' : selectedTruck.id === 'kia-mighty' ? 'Kia Mighty' : selectedTruck.id === 'kia-rhino' ? 'Kia Rhino' : selectedTruck.name}
                </span>
              </h4>
              <p>
                {selectedTruck.capacityText} ({selectedTruck.tonnageEstimate}) direct site dispatch
              </p>
            </div>

            <div className="trip-counter">
              <button
                className="trip-counter-btn"
                onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                aria-label="Decrease trips"
              >
                <Minus size={13} />
              </button>
              <span className="trip-count-display">
                {quantity} <span className="trip-word">{quantity === 1 ? 'Trip' : 'Trips'}</span>
              </span>
              <button
                className="trip-counter-btn"
                onClick={() => onQuantityChange(quantity + 1)}
                aria-label="Increase trips"
              >
                <Plus size={13} />
              </button>
            </div>
          </div>

          <div className="checkout-action-group">
            <div className="checkout-total-block">
              <div className="checkout-total-label">Estimated Total</div>
              <div className="checkout-total-amount">
                GH₵ {totalPrice.toLocaleString()}.00
              </div>
            </div>

            <button className="btn-primary dock-cta-btn" onClick={onOpenOrderModal}>
              <span className="cta-desktop-text">Confirm Site Details</span>
              <span className="cta-mobile-text">Confirm</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandCatalog;
