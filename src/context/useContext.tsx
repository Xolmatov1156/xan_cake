import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

interface BasketItem {
  id: number; 
  name: string;
  price: number;
  image: string;
}

interface BasketContextProps {
  basketCount: number;
  basketItems: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (id: number) => void; 
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

interface BasketProviderProps {
  children: ReactNode;
}

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [basketCount, setBasketCount] = useState<number>(0);

  useEffect(() => {
    const savedItems = localStorage.getItem('basketItems');
    const savedCount = localStorage.getItem('basketCount');
    if (savedItems) {
      setBasketItems(JSON.parse(savedItems));
    }
    if (savedCount) {
      setBasketCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    localStorage.setItem('basketCount', basketCount.toString());
  }, [basketItems, basketCount]);

  const addToBasket = useCallback((item: BasketItem) => {
    if (!basketItems.find(basketItem => basketItem.id === item.id)) {
      const newItems = [...basketItems, item];
      setBasketItems(newItems);
      setBasketCount(newItems.length);
    }
  }, [basketItems]);

  const removeFromBasket = useCallback((id: number) => {
    const updatedItems = basketItems.filter(item => item.id !== id);
    setBasketItems(updatedItems);
    setBasketCount(updatedItems.length);
  }, [basketItems]);

  return (
    <BasketContext.Provider value={{ basketCount, basketItems, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = (): BasketContextProps => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
