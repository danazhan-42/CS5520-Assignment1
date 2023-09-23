import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

function APPCheckBox({ label, onValueChange }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={(newValue) => {
          setChecked(newValue);
          onValueChange(newValue);
        }}
        style={styles.checkbox}
      />
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 8,
  },
  checkbox: {
    margin: 8,
  },
  text: {
    fontFamily: 15,
  },
});

export default APPCheckBox;
