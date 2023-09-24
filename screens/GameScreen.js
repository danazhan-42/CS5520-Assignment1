import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import ValidationTextInput from "../components/ValidationTextInput";
import APPCheckBox from "../components/APPCheckBox";
import AppBotton from "../components/AppBotton";
import ConfirmScreen from "./ConfirmScreen";
import Screen from "../components/Screen";

export default function GameScreen(props) {
  return (
    <Screen>
      <View style={styles.topContainer}>
        <AppBotton title="Logout" color="blue"></AppBotton>
      </View>
      <View style={styles.middleContainer}>
        <Header>Guess A Number Between 10 & 20</Header>
        <StatusBar style="auto" />
      </View>

      <View style={styles.bottomContainer}>
        <Card style={styles.bottomContainer}>
          <AppText>Enter a Number</AppText>
        </Card>
      </View>
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
});
