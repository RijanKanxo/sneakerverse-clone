
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { products } from '../utils/productData';
import { toast } from '../hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="nike-button"
        >
          Return to Home
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must select a size before adding to cart",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-500">{product.category}</span>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {product.hoverImage && (
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={product.hoverImage}
                    alt={`${product.name} alternative view`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              {product.isNew && (
                <div className="inline-block px-3 py-1 text-sm font-medium bg-black text-white rounded-full mb-2">
                  Just In
                </div>
              )}
              
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-lg">{product.category}</p>
              <p className="text-xl font-medium">${product.price}</p>
              
              {/* Size Selection */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="font-medium">Select Size</p>
                  <button className="text-sm text-gray-500 hover:text-black">Size Guide</button>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {product.sizes && product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`py-3 border rounded-md transition-all ${
                        selectedSize === size 
                          ? 'border-black' 
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="flex items-center space-x-3">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center">
                  <button 
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <div className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                    {quantity}
                  </div>
                  <button 
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button 
                  className="w-full py-4 bg-black text-white rounded-full font-medium transition hover:bg-gray-900 active:scale-[0.98]"
                  onClick={handleAddToCart}
                >
                  Add to Bag
                </button>
                
                <button className="w-full py-4 border border-gray-300 rounded-full font-medium transition hover:border-black active:scale-[0.98] flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Favorite
                </button>
              </div>
              
              {/* Product Description */}
              <div className="pt-4 border-t border-gray-200">
                <button 
                  className="flex justify-between items-center w-full py-4"
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                >
                  <span className="font-medium">Description</span>
                  {isDescriptionExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                
                {isDescriptionExpanded && (
                  <div className="pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {product.description || "No description available for this product."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div 
                    key={relatedProduct.id}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  >
                    <div className="overflow-hidden rounded-lg aspect-square mb-3">
                      <img 
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover object-center transition group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium">{relatedProduct.name}</h3>
                    <p className="text-gray-500">{relatedProduct.category}</p>
                    <p className="font-medium mt-1">${relatedProduct.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
