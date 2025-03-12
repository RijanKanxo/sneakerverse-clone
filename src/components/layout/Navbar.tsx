
import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scrolling when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            NIKE
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/men" className="nav-link">Men</Link>
            <Link to="/women" className="nav-link">Women</Link>
            <Link to="/kids" className="nav-link">Kids</Link>
            <Link to="/collections" className="nav-link">Collections</Link>
          </nav>
          
          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <button 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary transition-all duration-300 hover:bg-secondary/70"
              onClick={() => navigate('/search')}
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary transition-all duration-300 hover:bg-secondary/70"
              onClick={() => navigate('/favorites')}
            >
              <Heart className="w-5 h-5" />
            </button>
            
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary transition-all duration-300 hover:bg-secondary/70 relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            
            <button 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary transition-all duration-300 hover:bg-secondary/70"
              onClick={() => navigate('/account')}
            >
              <User className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-secondary transition-all duration-300 hover:bg-secondary/70"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Fixed solid background */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container p-6">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="text-2xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NIKE
            </Link>
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary"
              onClick={toggleMobileMenu}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-2xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/men" 
              className="text-2xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Men
            </Link>
            <Link 
              to="/women" 
              className="text-2xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Women
            </Link>
            <Link 
              to="/kids" 
              className="text-2xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kids
            </Link>
            <Link 
              to="/collections" 
              className="text-2xl font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
          </nav>
          
          <div className="mt-auto pt-8">
            <div className="flex justify-around">
              <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary"
                onClick={() => {
                  navigate('/search');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Search className="w-6 h-6" />
              </button>
              <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary"
                onClick={() => {
                  navigate('/favorites');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Heart className="w-6 h-6" />
              </button>
              <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary relative"
                onClick={() => {
                  toggleCart();
                  setIsMobileMenuOpen(false);
                }}
              >
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
              <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary"
                onClick={() => {
                  navigate('/account');
                  setIsMobileMenuOpen(false);
                }}
              >
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
