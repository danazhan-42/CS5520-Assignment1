import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import { colors } from "../.expo/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.textColor,
    fontWeight: "bold",
    padding: 10,
  },
});

export default AppText;
