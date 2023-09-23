import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import APPCheckBox from "../components/APPCheckBox";
import AppBotton from "../components/AppBotton";

function StartingScreen(props) {
  const [isEnabled, setEnabled] = useState(false);

  function enableStartButton() {
    setEnabled(true);
  }

  function disableStartButton() {
    setEnabled(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header></Header>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card>
          <AppText>Name</AppText>
          <AppTextInput></AppTextInput>
          <AppText>Email address</AppText>
          <AppTextInput></AppTextInput>
          <AppText>Phone number</AppText>
          <AppTextInput></AppTextInput>
          <APPCheckBox
            label="I am not a robot"
            onClick={enableStartButton}
          ></APPCheckBox>
          <View style={styles.bottonContainer}>
            <AppBotton
              title="reset"
              color="red"
              onPress={() => console.log("Tapped")}
            ></AppBotton>
            <AppBotton
              title="Start"
              color="blue"
              disabled={!isEnabled}
              onPress={() => console.log("Tapped")}
            ></AppBotton>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 9,
    justifyContent: "flext-start",
  },
  bottonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
});

export default StartingScreen;
