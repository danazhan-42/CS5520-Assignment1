import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { colors } from "../.expo/colors";

function ValidationTextInput({
  regex,
  message,
  reset,
  // start,
  onChangeText,
  // onValidation,
}) {
  const [text, setText] = useState();
  const [validationMessage, setValidationMessage] = useState();

  useEffect(() => {
    setText("");
  }, [reset]);

  const handleTextChange = (input) => {
    setText(input);
    // Give prompt feedback when user corrects the inputgit
    if (validationMessage) {
      validate(input);
    }
    onChangeText(input);
  };

  const validate = (input) => {
    const isValid = regex.test(input);
    // onValidation(isValid);
    if (!isValid && start) {
      setValidationMessage(validationMessage);
    } else {
      setValidationMessage();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        onEndEditing={() => validate(text)}
        value={text}
        autoCapitalize="none"
      ></TextInput>
      <Text style={styles.msg}>{message}</Text>
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
  msg: {
    fontSize: 15,
    color: "black",
    marginBottom: 10,
  },
});

export default ValidationTextInput;