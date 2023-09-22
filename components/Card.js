import { View, StyleSheet } from "react-native";
import React from "react";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    minHeight: 500,
    // Rounded corners
    borderRadius: 10,
    backgroundColor: "gainsboro",

    // Shadow
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    //Flexbox
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
});

export default Card;
