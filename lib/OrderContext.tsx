"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface OrderContextType {
  orderPlaced: boolean;
  setOrderPlaced: (value: boolean) => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  return (
    <OrderContext.Provider value={{ orderPlaced, setOrderPlaced }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === null) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
