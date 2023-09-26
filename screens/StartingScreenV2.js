import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import AppBotton from "../components/AppButton";
import ConfirmScreen from "./ConfirmScreen";
import Screen from "../components/Screen";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../components/validation";
import Checkbox from "expo-checkbox";

export default function StartingScreenV2({ onConfirmed }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [startFlag, setStartFlag] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNameInput = (text) => {
    setName(text);
    setNameError(validateName(text) ? "" : "Please enter a valid name");
  };

  const handleEmailInput = (text) => {
    setEmail(text);
    setEmailError(validateEmail(text) ? "" : "Please enter a valid Email");
  };

  const handlePhoneInput = (text) => {
    setPhone(text);
    setPhoneError(
      validatePhone(text)
        ? ""
        : "Please enter a valid phone number of 10 digits"
    );
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setChecked(false);
    setStartFlag(false);
  };

  const handleStart = () => {
    setStartFlag(true);

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    // setNameError(isNameValid ? "" : "Please enter a valid name");
    // setEmailError(isEmailValid ? "" : "Please enter a valid Email");
    // setPhoneError(
    //   isEmailValid ? "" : "Please enter a valid phone number of 10 digits"
    // );

    if (isNameValid && isEmailValid && isPhoneValid) {
      makeModalVisible();
    }
  };

  function makeModalVisible() {
    setIsModalVisible(true);
  }

  function makeModalInvisible() {
    setIsModalVisible(false);
  }

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
            onChangeText={handleNameInput}
            style={styles.input}
          ></TextInput>
          {startFlag && nameError ? (
            <Text style={styles.errorMsg}>{nameError}</Text>
          ) : null}
          <AppText>Emdail address</AppText>
          <TextInput
            value={email}
            onChangeText={handleEmailInput}
            style={styles.input}
          ></TextInput>
          {startFlag && emailError ? (
            <Text style={styles.errorMsg}>{emailError}</Text>
          ) : null}
          <AppText>Phone number</AppText>
          <TextInput
            value={phone}
            onChangeText={handlePhoneInput}
            style={styles.input}
          ></TextInput>
          {startFlag && phoneError ? (
            <Text style={styles.errorMsg}>{phoneError}</Text>
          ) : null}
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
              onPress={handleStart}
              disabled={!isChecked}
            ></AppBotton>
          </View>
        </Card>
      </View>
      <ConfirmScreen
        userInfo={[name, email, phone]}
        modalVisibility={isModalVisible}
        hideModal={makeModalInvisible}
        onConfirm={onConfirmed}
      ></ConfirmScreen>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 9,
    justifyContent: "flex-start",
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
