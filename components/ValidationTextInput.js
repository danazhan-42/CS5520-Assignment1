import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { colors } from "../.expo/colors";

function ValidationTextInput(props) {
  const [text, setText] = useState();
  const [validationMessage, setValidationMessage] = useState();

  useEffect(() => {
    setText("");
  }, [props.reset]);

  const handleTextChange = (input) => {
    setText(input);
    // Give prompt feedback when user corrects the inputgit
    if (validationMessage) {
      validate(input);
    }
  };

  const validate = (input) => {
    const isValid = props.regex.test(input);
    if (!isValid) {
      setValidationMessage(props.validationMessage);
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
      ></TextInput>
      <Text style={styles.msg}>{validationMessage}</Text>
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
