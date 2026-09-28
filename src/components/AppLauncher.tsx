import React, { useRef, useEffect } from 'react';
import {
  Code2,
  GraduationCap,
  Sparkles,
  Zap,
  ShoppingBag,
  Sprout,
  Baby,
  Cpu,
  HardHat,
  X
} from 'lucide-react';

interface AppLauncherProps {
  onClose: () => void;
}

interface AppItem {
  name: string;
  desc: string;
  url: string;
  icon: React.ReactNode;
  active?: boolean;
}

const APPS: AppItem[] = [
  {
    name: 'Kone Build',
    desc: 'Heavy-Duty Building Materials & Logistics',
    url: 'https://build.koneacademy.io',
    icon: <HardHat size={20} color="#f59e0b" />,
    active: true
  },
  {
    name: 'Kone Academy',
    desc: 'Main Innovation & Educational Hub',
    url: 'https://www.koneacademy.io',
    icon: <GraduationCap size={20} color="#60a5fa" />
  },
  {
    name: 'Kone Code',
    desc: 'Software Engineering & Programming',
    url: 'https://code.koneacademy.io',
    icon: <Code2 size={20} color="#38bdf8" />
  },
  {
    name: 'Kone Farms',
    desc: 'Smart Agritech & Produce Distribution',
    url: 'https://farms.koneacademy.io',
    icon: <Sprout size={20} color="#34d399" />
  },
  {
    name: 'Kone Warp',
    desc: 'Ultra-Fast Delivery & Infrastructure',
    url: 'https://warp.koneacademy.io',
    icon: <Zap size={20} color="#f472b6" />
  },
  {
    name: 'Kone AI',
    desc: 'Neural Architectures & Agents',
    url: 'https://ai.koneacademy.io',
    icon: <Sparkles size={20} color="#a855f7" />
  },
  {
    name: 'Kone Shop',
    desc: 'Hardware Kits & Tech Gear',
    url: 'https://shop.koneacademy.io',
    icon: <ShoppingBag size={20} color="#fb7185" />
  },
  {
    name: 'Kone Lab',
    desc: 'Robotics, IoT & 3D Prototyping',
    url: 'https://lab.koneacademy.io',
    icon: <Cpu size={20} color="#38bdf8" />
  },
  {
    name: 'Kone Kids',
    desc: 'STEM & Robotics for Youth',
    url: 'https://kids.koneacademy.io',
    icon: <Baby size={20} color="#fbbf24" />
  }
];

export const AppLauncher: React.FC<AppLauncherProps> = ({ onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleDown);
    return () => document.removeEventListener('mousedown', handleDown);
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      style={{
        position: 'absolute',
        top: '115%',
        right: 0,
        width: '340px',
        backgroundColor: '#0f172a',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '16px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        zIndex: 999,
        padding: '1.25rem',
        backdropFilter: 'blur(20px)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid rgba(148, 163, 184, 0.15)'
        }}
      >
        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f8fafc' }}>
          Kone Ecosystem Services
        </span>
        <button
          onClick={onClose}
          style={{ background: 'transparent', border: 'none', color: '#94a3b8' }}
        >
          <X size={16} />
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
        {APPS.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              padding: '0.6rem 0.75rem',
              borderRadius: '10px',
              backgroundColor: app.active ? 'rgba(245, 158, 11, 0.12)' : 'rgba(30, 41, 59, 0.4)',
              border: app.active
                ? '1px solid rgba(245, 158, 11, 0.4)'
                : '1px solid rgba(148, 163, 184, 0.1)',
              transition: 'background 0.2s'
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {app.icon}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  color: app.active ? '#fbbf24' : '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                {app.name}
                {app.active && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      background: '#f59e0b',
                      color: '#090d16',
                      padding: '1px 5px',
                      borderRadius: '4px'
                    }}
                  >
                    CURRENT
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: '#94a3b8',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}
              >
                {app.desc}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppLauncher;
