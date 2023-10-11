import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

import { colors } from "../.expo/colors";

const Card = ({ children, style }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={[styles.card, style]}>
      {children}
    </KeyboardAvoidingView>
  );
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.8,
    // Rounded corners
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    //top: 0.2 * screenHeight,
    //position: "absolute",
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
