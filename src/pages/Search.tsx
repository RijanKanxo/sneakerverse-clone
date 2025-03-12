
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CartSlider from '../components/ui/CartSlider';

const Search = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Here you would typically fetch search results
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Search Products</h1>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full h-12 pl-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Button type="submit" className="nike-button min-w-[100px]">
                Search
              </Button>
            </div>
          </form>
          
          <div className="text-center py-8">
            <p className="text-gray-500">
              Enter a search term to find products
            </p>
          </div>
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

export default Search;
