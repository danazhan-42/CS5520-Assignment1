import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";

import { colors } from "../.expo/colors";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.8,
    // Rounded corners
    backgroundColor: colors.cardBackground,
    borderRadius: 10,

    // Shadow
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 8,
    elevation: 10,

    //Flexbox
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingBottom: 30,
  },
});

export default Card;
