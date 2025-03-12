
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "../hooks/use-toast";
import { ProductType } from '../types/ProductType';

export interface CartItem extends ProductType {
  quantity: number;
  selectedSize: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: ProductType, quantity: number, size: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product: ProductType, quantity: number, size: string) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart with same size
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.selectedSize === size
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity, selectedSize: size }];
      }
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
