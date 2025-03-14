
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { ProductType } from '../../types/ProductType';

interface ProductCardProps extends ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  image,
  hoverImage,
  isNew = false,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Using a default size for quick add
    const defaultSize = rest.sizes && rest.sizes.length > 0 ? rest.sizes[0] : "M";
    addToCart({ id, name, category, price, image, hoverImage, isNew, ...rest }, 1, defaultSize);
  };
  
  return (
    <div 
      className="group product-card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-secondary/50 aspect-square">
          {/* Product Image with Hover Effect */}
          <div className="image-reveal h-full">
            <img 
              src={isHovered && hoverImage ? hoverImage : image}
              alt={name}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </div>
          
          {/* New Tag */}
          {isNew && (
            <div className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-black text-white rounded">
              New
            </div>
          )}
          
          {/* Quick Add Button - Appears on Hover */}
          <div 
            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-95 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300"
          >
            <button 
              className="w-full text-white py-2 text-sm uppercase font-medium flex items-center justify-center"
              onClick={handleQuickAdd}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Quick Add
            </button>
          </div>
        </div>
        
        <div className="mt-4 space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-medium text-black line-clamp-1">{name}</h3>
            <span className="font-medium">${price}</span>
          </div>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
