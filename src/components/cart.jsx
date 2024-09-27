import React, { useContext } from 'react';
import { CartContext } from '../contexts/AddToCartContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Total quantity of items
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2); // Total price of items

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Your cart is empty!</h2>
      </div>
    );
  }
  const theme = useContext(ThemeContext);

  return (
    <div className={`${theme == "light" ? "bg-white text-black " : "bg-black text-white"}`} >
      <div className="container mx-auto py-10 px-5">
        <h2 className="text-3xl font-semibold mb-5">Your Cart ({totalItems} items)</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-5 flex justify-between items-center">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price} USD</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="text-xl bg-red-400 p-2 rounded-lg"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-3 text-lg text-black">{item.quantity}</span>
                <button
                  className="text-xl bg-green-400 p-2 rounded-lg"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <button
                className="ml-5 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>


        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-blue-500 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Items</h3>
            <p className="text-2xl">{totalItems}</p>
          </div>
          <div className="bg-green-500 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Price</h3>
            <p className="text-2xl">{totalPrice} USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
