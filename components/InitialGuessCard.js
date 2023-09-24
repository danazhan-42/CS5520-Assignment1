import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Card from "./Card";
import AppButton from "./AppButton";
import AppText from "./AppText";
import Header from "./Header";
import GameTextInput from "./GameTextInput";

export default function InitialGuessCard({ onConfirmGuess }) {
  const [enteredValue, setEnteredValue] = useState();

  return (
    <View>
      <View style={styles.topContainer}>
        <AppButton title="Logout" color="blue"></AppButton>
      </View>
      <View style={styles.middleContainer}>
        <Header>Guess A Number Between 10 & 20</Header>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card alignItems="center">
          <AppText>Enter a Number</AppText>
          <GameTextInput></GameTextInput>
          <View style={styles.bottonContainer}>
            <AppButton title="Reset" color="red"></AppButton>
            <AppButton title="Confirm" color="blue"></AppButton>
          </View>
        </Card>
      </View>
    </View>
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
});
