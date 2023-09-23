import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../.expo/colors";

function AppTextInput(props) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setText} style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 10,
    justifyContent: "center",
  },
  input: {
    fontSize: 15,
    fontWeight: "bold",
    borderBottomColor: "darkslateblue",
    borderBottomWidth: 1,
    textAlign: "center",
  },
});

export default AppTextInput;
