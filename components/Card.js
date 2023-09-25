import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";

const Card = ({ children, alignItems = "flex-start" }) => {
  return <View style={[styles.card, { alignItems }]}>{children}</View>;
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.8,
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
    alignItems: "stretch",
  },
});

export default Card;
