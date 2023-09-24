import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ children }) => {
  return (
    <View>
      <Text style={styles.header}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
});

export default Header;
