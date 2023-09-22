import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

function StartingScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header />
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card>
          <View style={styles.card}>
            <AppText>Name</AppText>
            <AppTextInput></AppTextInput>
            <AppText>Email address</AppText>
            <AppTextInput></AppTextInput>
            <AppText>Phone number</AppText>
            <AppTextInput></AppTextInput>
          </View>
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
    flex: 8,
    alignItems: "stretch",
  },
});

export default StartingScreen;
