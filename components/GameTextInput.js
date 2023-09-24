import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

function GameTextInput() {
  const [text, setText] = useState();

  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={setText}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "20%",
    fontSize: 15,
    fontWeight: "bold",
    borderBottomColor: "darkslateblue",
    borderBottomWidth: 1,
    textAlign: "center",
  },
});
export default GameTextInput;
