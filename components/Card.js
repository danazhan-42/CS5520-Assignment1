import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";

import { colors } from "../.expo/colors";

const Card = ({ children, alignItems = "flex-start" }) => {
  return <View style={[styles.card, { alignItems }]}>{children}</View>;
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
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
});

export default Card;
