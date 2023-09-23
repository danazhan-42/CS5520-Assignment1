import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppBotton({ title, onPress, color, disabled = false }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppBotton;