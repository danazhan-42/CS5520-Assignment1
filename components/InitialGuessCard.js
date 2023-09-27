import { StyleSheet, TextInput, View, Alert, Button } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Card from "./Card";
import AppText from "./AppText";
import Header from "./Header";
import { colors } from "../.expo/colors";

export default function InitialGuessCard({ onConfirmGuess }) {
  const [enteredValue, setEnteredValue] = useState();

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber >= 10 && chosenNumber <= 20) {
      onConfirmGuess(chosenNumber);
    } else {
      Alert.alert("Please enter a number between 10 and 20.");
    }
  };

  return (
    <>
      <View style={styles.topContainer}>
        <Header>Guess A Number Between 10 & 20</Header>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card>
          <AppText style={{ alignSelf: "center" }}>Enter a Number</AppText>
          <TextInput
            value={enteredValue}
            onChangeText={setEnteredValue}
            style={styles.input}
            keyboardType="numeric"
          ></TextInput>
          <View style={styles.bottonContainer}>
            <Button
              title="Reset"
              color="red"
              onPress={() => setEnteredValue("")}
            ></Button>
            <Button
              title="Confirm"
              color="blue"
              onPress={confirmInputHandler}
            ></Button>
          </View>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    margin: 15,
  },
  bottomContainer: {
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: "20%",
    fontSize: 15,
    fontWeight: "bold",
    borderBottomColor: colors.textColor,
    borderBottomWidth: 1,
    textAlign: "center",
    padding: 15,
    marginBottom: 15,
  },
  topContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingBottom: 30,
  },
});
