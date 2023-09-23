import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppBotton({ title, onPress, color, disabled = false }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: "red",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
export default AppBotton;
