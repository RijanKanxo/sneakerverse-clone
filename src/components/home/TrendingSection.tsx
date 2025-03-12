
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrendingSection = () => {
  return (
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold tracking-tight mb-10">Trending Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category 1 */}
          <div className="group relative overflow-hidden rounded-lg aspect-[3/4] animate-hover">
            <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/30 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
              alt="Running"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">Running</h3>
              <p className="text-white/80 mb-4">Engineered for speed and comfort.</p>
              <Link 
                to="/category/running" 
                className="inline-flex items-center text-white border-b border-white pb-1 hover:text-gray-200 transition-colors"
              >
                Shop Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Category 2 */}
          <div className="group relative overflow-hidden rounded-lg aspect-[3/4] animate-hover">
            <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/30 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1519674258075-48123892eb1e?auto=format&fit=crop&q=80&w=1000"
              alt="Basketball"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">Basketball</h3>
              <p className="text-white/80 mb-4">Dominate the court with precision.</p>
              <Link 
                to="/category/basketball" 
                className="inline-flex items-center text-white border-b border-white pb-1 hover:text-gray-200 transition-colors"
              >
                Shop Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Category 3 */}
          <div className="group relative overflow-hidden rounded-lg aspect-[3/4] animate-hover">
            <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/30 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1564594985645-4427056e22e2?auto=format&fit=crop&q=80&w=1000"
              alt="Lifestyle"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">Lifestyle</h3>
              <p className="text-white/80 mb-4">Elevate your everyday style.</p>
              <Link 
                to="/category/lifestyle" 
                className="inline-flex items-center text-white border-b border-white pb-1 hover:text-gray-200 transition-colors"
              >
                Shop Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
