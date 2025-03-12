
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(scrollY / 500, 1);
      const translateY = scrollY * 0.5;
      
      heroRef.current.style.opacity = String(opacity);
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="pt-20 lg:pt-28 pb-10 lg:pb-20 overflow-hidden">
      <div className="container-custom">
        <div 
          ref={heroRef}
          className="relative transition-all duration-300 ease-out"
        >
          {/* Hero Background */}
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=1920&h=1080"
                alt="Nike Shoes"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 pt-20 pb-32 px-6 md:px-12 max-w-2xl text-white">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Your Everyday <br /> Performance
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-md">
                Find your perfect pair from our collection of premium and innovative designs.
              </p>
              
              <div className="pt-6">
                <Link 
                  to="/collections" 
                  className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-opacity-90 active:scale-95"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
