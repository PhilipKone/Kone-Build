import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SandCatalog from './components/SandCatalog';
import ComingSoonCatalog from './components/ComingSoonCatalog';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';
import { TRUCK_OPTIONS, SAND_TYPES } from './data/materialsData';
import { TruckOption, SandCategory } from './types/materials';
import './App.css';

export function App() {
  const [selectedTruck, setSelectedTruck] = useState<TruckOption>(TRUCK_OPTIONS[2]); // Default to Kia Medium (500)
  const [selectedSand, setSelectedSand] = useState<SandCategory>(SAND_TYPES[0].id); // Default to Sharp Sand
  const [quantity, setQuantity] = useState<number>(1);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

  const handleScrollToCalculator = () => {
    const el = document.getElementById('sand-pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="build-app">
      <Header onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      <main>
        <HeroSection
          onScrollToCalculator={handleScrollToCalculator}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        <SandCatalog
          selectedTruck={selectedTruck}
          selectedSand={selectedSand}
          quantity={quantity}
          onSelectTruck={setSelectedTruck}
          onSelectSand={setSelectedSand}
          onQuantityChange={setQuantity}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        <ComingSoonCatalog />
      </main>

      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedTruck={selectedTruck}
        selectedSand={selectedSand}
        quantity={quantity}
      />
    </div>
  );
}

export default App;
