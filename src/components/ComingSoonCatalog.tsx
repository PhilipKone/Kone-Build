import React from 'react';
import { Package, ArrowRight } from 'lucide-react';
import { FUTURE_MATERIALS, DISPATCH_CONTACT } from '../data/materialsData';

export const ComingSoonCatalog: React.FC = () => {
  const handleInquire = (materialName: string) => {
    const text = `Hello Kone Build! 🧱 I would like to inquire about *${materialName}* for my building project.`;
    window.open(`https://wa.me/${DISPATCH_CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="expansion-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-tag">Product Expansion</div>
            <h2 className="section-title">Upcoming Building Supplies</h2>
            <p className="section-sub">
              Expanding supply across all construction phases. Inquire early for bulk wholesale contracting.
            </p>
          </div>
          <button
            className="btn-secondary expansion-boq-btn"
            onClick={() => handleInquire('Complete Bill of Quantities (BOQ)')}
          >
            <Package size={15} />
            <span>Upload BOQ for Quote</span>
          </button>
        </div>

        <div className="expansion-grid">
          {FUTURE_MATERIALS.map((mat) => (
            <div key={mat.id} className="expansion-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                <span className="badge badge-slate" style={{ fontSize: '0.68rem' }}>
                  {mat.category}
                </span>
                <span className="badge badge-amber" style={{ fontSize: '0.68rem' }}>
                  {mat.status}
                </span>
              </div>

              <h4 className="expansion-card-title">{mat.name}</h4>

              <button
                onClick={() => handleInquire(mat.name)}
                style={{
                  marginTop: '0.85rem',
                  color: '#f59e0b',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: 0
                }}
              >
                <span>Inquire Spec</span>
                <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonCatalog;
