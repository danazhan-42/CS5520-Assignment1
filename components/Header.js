import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { colors } from "../.expo/colors";

const Header = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "tomato",
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
  },
  header: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
