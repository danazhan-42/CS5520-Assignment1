import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
  },
});

export default Header;
