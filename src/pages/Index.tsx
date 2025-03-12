
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TrendingSection from '../components/home/TrendingSection';
import CartSlider from '../components/ui/CartSlider';

interface IndexProps {
  category?: string;
}

const Index: React.FC<IndexProps> = ({ category: propCategory }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { category: paramCategory } = useParams<{ category: string }>();
  
  // Use either the prop category or the URL parameter
  const activeCategory = propCategory || paramCategory;
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        {activeCategory && <FeaturedProducts category={activeCategory} />}
        {!activeCategory && <FeaturedProducts />}
        <TrendingSection />
      </main>
      
      <Footer />
      
      <CartSlider 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
};

export default Index;
