import React from 'react';
import { CheckCheck, Truck, ShieldAlert, CreditCard } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <div className="container">
      <div className="trust-grid">
        <div className="glass-panel trust-card">
          <CheckCheck size={28} className="trust-icon" />
          <div className="trust-text">
            <h4>Accurate Measure Guarantee</h4>
            <p>Full bucket tippers and level beds. We guarantee honest volume with zero short-changing.</p>
          </div>
        </div>

        <div className="glass-panel trust-card">
          <Truck size={28} className="trust-icon" />
          <div className="trust-text">
            <h4>Tight-Access Capable</h4>
            <p>From narrow alleys reached by Aboboya to wide estate developments, our fleet handles any site road.</p>
          </div>
        </div>

        <div className="glass-panel trust-card">
          <ShieldAlert size={28} className="trust-icon" />
          <div className="trust-text">
            <h4>Zero-Silt Clean Sand</h4>
            <p>Inspected at source to guarantee strong concrete binding and smooth plaster with no cracking.</p>
          </div>
        </div>

        <div className="glass-panel trust-card">
          <CreditCard size={28} className="trust-icon" />
          <div className="trust-text">
            <h4>Flexible Site Payment</h4>
            <p>Pay upon site inspection via Mobile Money (MoMo), cash upon offload, or Kone Pay.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
