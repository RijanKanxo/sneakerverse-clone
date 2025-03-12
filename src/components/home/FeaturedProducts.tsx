
import React from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../utils/productData';

const FeaturedProducts = () => {
  // Filter featured products
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-2 text-gray-500 max-w-2xl">
              Our selection of premium products curated for ultimate performance and style.
            </p>
          </div>
          <a 
            href="/collections" 
            className="mt-4 md:mt-0 inline-flex font-medium hover:underline"
          >
            View All Products
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
