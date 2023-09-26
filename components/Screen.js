import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../.expo/colors";

function Screen({ children }) {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  gradient: {
    flex: 1,
  },
});
export default Screen;
