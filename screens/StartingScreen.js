import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import ValidationTextInput from "../components/ValidationTextInput";
import APPCheckBox from "../components/APPCheckBox";
import AppBotton from "../components/AppBotton";

function StartingScreen(props) {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header></Header>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card>
          <AppText>Name</AppText>
          <ValidationTextInput></ValidationTextInput>
          <AppText>Email address</AppText>
          <ValidationTextInput></ValidationTextInput>
          <AppText>Phone number</AppText>
          <ValidationTextInput></ValidationTextInput>
          <APPCheckBox
            label="I am not a robot"
            onValueChange={(newValue) => setIsCheckboxSelected(newValue)}
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
              disabled={!isCheckboxSelected}
              onPress={() => console.log("y")}
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
