import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.card}>
      <Text>Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Example styles for the card
    backgroundColor: "red",
  },
});

export default Card;
