import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Screen from "../components/Screen";
import InitialGuessCard from "../components/InitialGuessCard";

export default function GameScreen(props) {
  return (
    <Screen>
      <InitialGuessCard></InitialGuessCard>
    </Screen>
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
