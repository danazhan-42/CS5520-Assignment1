import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.card}>
      <Text>It is inside a card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    minHeight: 450,
    // Rounded corners
    borderRadius: 10,
    backgroundColor: "gainsboro",

    // Shadow
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});

export default Card;
