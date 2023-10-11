import React from "react";
import { Text, StyleSheet } from "react-native";

import { colors } from "../.expo/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    //backgroundColor: "grey",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textColor,
    alignSelf: "flex-start",
    paddingBottom: 10,
  },
});

export default AppText;
