
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { User } from 'lucide-react';
import CartSlider from '../components/ui/CartSlider';
import { Button } from '@/components/ui/button';

const Account = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My Account</h1>
          
          {isLoggedIn ? (
            <div className="max-w-xl mx-auto">
              <div className="bg-secondary/50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
                {/* Account information would be displayed here */}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h2 className="text-2xl font-semibold mb-4">Sign In to Your Account</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Access your Nike Member profile, check your orders, and manage your preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="nike-button min-w-[120px]">
                  Sign In
                </Button>
                <Button className="nike-button-outline min-w-[120px]">
                  Create Account
                </Button>
              </div>
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

export default Account;
