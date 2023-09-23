import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return (
    <Text style={[styles.text, style]} autoCapitalize="none">
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "darkslateblue",
    fontWeight: "bold",
    padding: 5,
  },
});

export default AppText;
