import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

function APPCheckBox({ label }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
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
  },
  checkbox: {
    margin: 8,
  },
  text: {
    fontFamily: 15,
  },
});

export default APPCheckBox;
