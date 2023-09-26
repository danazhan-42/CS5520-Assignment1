import { StyleSheet, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Card from "./Card";
import AppButton from "./AppButton";
import AppText from "./AppText";
import Header from "./Header";

export default function InitialGuessCard({ onConfirmGuess, handleLogout }) {
  const [enteredValue, setEnteredValue] = useState();

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber >= 10 && chosenNumber <= 20) {
      onConfirmGuess(chosenNumber);
    } else {
      Alert.alert("Please enter a number between 10 and 20.");
    }
  };

  const onLogoutHandler = () => {
    handleLogout(true);
  };

  return (
    <>
      <View style={styles.topContainer}>
        <AppButton
          title="Logout"
          onPress={onLogoutHandler}
          color="blue"
        ></AppButton>
      </View>
      <View style={styles.middleContainer}>
        <Header>Guess A Number Between 10 & 20</Header>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card alignItems="center">
          <AppText>Enter a Number</AppText>
          <TextInput
            value={enteredValue}
            onChangeText={setEnteredValue}
            style={styles.input}
          ></TextInput>
          <View style={styles.bottonContainer}>
            <AppButton
              title="Reset"
              color="red"
              onPress={() => setEnteredValue("")}
            ></AppButton>
            <AppButton
              title="Confirm"
              color="blue"
              onPress={confirmInputHandler}
            ></AppButton>
          </View>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 10,
    justifyContent: "flext-start",
    alignItems: "center",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 30,
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: "90%",
  },
  bottonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
  },
  input: {
    width: "20%",
    fontSize: 15,
    fontWeight: "bold",
    borderBottomColor: "darkslateblue",
    borderBottomWidth: 1,
    textAlign: "center",
    padding: 15,
  },
});
