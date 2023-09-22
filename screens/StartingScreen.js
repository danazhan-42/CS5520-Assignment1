import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import APPCheckBox from "../components/APPCheckBox";
import AppBotton from "../components/AppBotton";

function StartingScreen(props) {
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
          <APPCheckBox label="I am not a robot"></APPCheckBox>
          <AppBotton
            title="reset"
            onPress={() => console.log("Tapped")}
          ></AppBotton>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    flex: 9,
    justifyContent: "flext-start",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StartingScreen;
