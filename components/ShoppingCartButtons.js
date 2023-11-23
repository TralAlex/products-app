import { View, Text, Button, StyleSheet } from 'react-native';

const ShoppingCartButtons = ({ item, quantity, onAddItem, onRemoveItem}) => {

  return (
    <View>
      <Button
        title="+"
        onPress={() => onAddItem(item)}
        style={styles.addToCartButton}
      />
      <Text>{quantity}</Text>
      <Button
        title="-"
        onPress={() => onRemoveItem(item)}
        style={styles.removeToCartButton}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  removeToCartButton: {
    backgroundColor: 'red',
    color: 'white',
    marginTop: 10,
    width: 30,
    height: 30
  },
  addToCartButton: {
    backgroundColor: 'green', // Change the background color to your preference
    color: 'white',           // Change the text color to your preference
    width: 10,
    height: 10
  },
});

export default ShoppingCartButtons;
