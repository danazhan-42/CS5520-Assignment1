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
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
} from "../components/validation";
import Checkbox from "expo-checkbox";

export default function StartingScreenV2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [startFlag, setStartFlag] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleNameInput = (text) => {
    setName(text);
    setNameError(validateName(text) ? "" : "Please enter a valid name");
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setNameError("");
  };

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
            onChangeText={setName}
            style={styles.input}
          ></TextInput>
          {startFlag && nameError ? (
            <Text style={styles.errorMsg}>{nameError}</Text>
          ) : null}
          <AppText>Emdail address</AppText>
          <TextInput style={styles.input}></TextInput>
          <AppText>Phone number</AppText>
          <TextInput style={styles.input}></TextInput>
          <View style={styles.section}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              style={styles.checkbox}
            />
            <Text>I am not a robot</Text>
          </View>
          <View style={styles.bottonContainer}>
            <AppBotton
              title="Reset"
              color="red"
              onPress={handleReset}
            ></AppBotton>
            <AppBotton
              title="Start"
              color="blue"
              disabled={!isChecked}
            ></AppBotton>
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
  },
  errorMsg: {
    padding: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 8,
  },
  checkbox: {
    margin: 8,
  },
  text: {
    fontFamily: 15,
  },
});
