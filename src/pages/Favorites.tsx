
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Heart } from 'lucide-react';
import CartSlider from '../components/ui/CartSlider';
import { Button } from '@/components/ui/button';

const Favorites = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  
  // This would normally be stored in a FavoritesContext or fetched from an API
  const favoriteItems: any[] = [];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My Favorites</h1>
          
          {favoriteItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Favorite items would render here */}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h2 className="text-2xl font-semibold mb-4">Your Favorites List is Empty</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Save your favorite Nike products here so you can easily find them later.
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="nike-button"
              >
                Shop Now
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      <CartSlider 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
};

export default Favorites;
