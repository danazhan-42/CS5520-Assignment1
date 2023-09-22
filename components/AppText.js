import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "darkslateblue",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default AppText;
