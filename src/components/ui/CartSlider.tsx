
import React, { useState, useEffect } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

interface CartSliderProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSlider: React.FC<CartSliderProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClosing, setIsClosing] = useState(false);
  
  // Sample data - in a real app, this would come from a cart context or state
  useEffect(() => {
    setCartItems([
      {
        id: '1',
        name: 'Nike Air Max 90',
        price: 150,
        image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
        quantity: 1,
        size: 'US 10'
      },
      {
        id: '2',
        name: 'Nike Sportswear Club Fleece',
        price: 55,
        image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d',
        quantity: 1,
        size: 'L'
      }
    ]);
  }, []);
  
  const handleCloseCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  
  // If not open and not in closing animation, don't render
  if (!isOpen && !isClosing) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-50'
        }`}
        onClick={handleCloseCart}
      />
      
      {/* Cart Panel */}
      <div 
        className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
          isClosing ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Your Cart ({cartItems.length})
            </h2>
            <button 
              onClick={handleCloseCart}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                <button 
                  onClick={handleCloseCart}
                  className="nike-button"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 px-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    {/* Product Image */}
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to={`/product/${item.id}`} onClick={handleCloseCart}>
                              {item.name}
                            </Link>
                          </h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                      </div>
                      
                      <div className="flex flex-1 items-end justify-between text-sm">
                        {/* Quantity Adjuster */}
                        <div className="flex items-center border border-gray-200 rounded">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-gray-700 flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 py-6 px-6">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>${calculateTotal().toFixed(2)}</p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                className="w-full nike-button mb-4"
              >
                Checkout
              </button>
              <button
                onClick={handleCloseCart}
                className="w-full nike-button-outline"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
