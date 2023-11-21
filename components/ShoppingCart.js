import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <View>
      <Text>Shopping Cart</Text>
      {cartItems.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Button title="Remove" onPress={() => removeFromCart(item.id)} />
        </View>
      ))}
      
      {/* Add your existing code to display total, checkout button, etc. */}
    </View>
  );
};

export default ShoppingCart;