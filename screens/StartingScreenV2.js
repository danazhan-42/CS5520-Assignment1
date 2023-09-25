import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import APPCheckBox from "../components/APPCheckBox";
import AppBotton from "../components/AppButton";
import ConfirmScreen from "./ConfirmScreen";
import Screen from "../components/Screen";

export default function StartingScreenV2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validationMessage, setValidationMessage] = useState();

  return (
    <Screen>
      <View style={styles.topContainer}>
        <Header>Welcome</Header>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card>
          <AppText>Name</AppText>
          <TextInput
            value={name}
            onChangeText={""}
            style={styles.input}
          ></TextInput>
          <AppText>Email address</AppText>
          <TextInput style={styles.input}></TextInput>
          <AppText>Phone number</AppText>
          <TextInput style={styles.input}></TextInput>
          <APPCheckBox label="I am not a robot"></APPCheckBox>
          <View style={styles.bottonContainer}>
            <AppBotton title="Reset" color="red"></AppBotton>
            <AppBotton title="Start" color="blue"></AppBotton>
          </View>
        </Card>
      </View>
    </Screen>
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
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  input: {
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    borderBottomColor: "darkslateblue",
    borderBottomWidth: 1,
    textAlign: "center",
    padding: 10,
    marginBottom: 30,
  },
});
