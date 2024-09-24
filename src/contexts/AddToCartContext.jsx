import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item) {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(data => data.id === item.id);
      if (itemIndex === -1) {
        return [...prevItems, { ...item, quantity: 1 }];
      } else {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity++;
        return newItems;
      }
    });
  }

  function removeItemFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function isItemAdded(id) {
    return cartItems.find(item => item.id === id) || null;
  }

  function lessQuantityFromCart(id) {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(data => data.id === id);
      if (itemIndex === -1) return prevItems;

      const newItems = [...prevItems];
      if (newItems[itemIndex].quantity > 1) {
        newItems[itemIndex].quantity--;
      } else {
        newItems.splice(itemIndex, 1); // Remove the item if quantity is 1
      }
      return newItems;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        isItemAdded,
        lessQuantityFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
