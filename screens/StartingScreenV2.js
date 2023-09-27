import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

import { colors } from "../.expo/colors";
import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
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
    // The Parent container
    <Screen>
      {/* The first child container */}
      <Header>Welcome</Header>
      <StatusBar style="auto" />
      {/* The second child container */}
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
          <AppText style={{ paddingTop: 30 }}>Emdail address</AppText>
          <TextInput
            value={email}
            onChangeText={handleEmailInput}
            style={styles.input}
          ></TextInput>
          {startFlag && emailError ? (
            <Text style={styles.errorMsg}>{emailError}</Text>
          ) : null}
          <AppText style={{ paddingTop: 30 }}>Phone number</AppText>
          <TextInput
            value={phone}
            onChangeText={handlePhoneInput}
            style={styles.input}
            keyboardType="numeric"
          ></TextInput>
          {startFlag && phoneError ? (
            <Text style={styles.errorMsg}>{phoneError}</Text>
          ) : null}
          <View style={styles.checkBoxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              style={styles.checkbox}
            />
            <Text>I am not a robot</Text>
          </View>
          <View style={styles.bottonContainer}>
            <Button
              title="Reset"
              color={colors.buttonRed}
              onPress={handleReset}
            ></Button>
            <Button
              title="Start"
              color={colors.buttonBlue}
              onPress={handleStart}
              disabled={!isChecked}
            ></Button>
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
    //backgroundColor: "tomato",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    margin: 15,
  },
  checkBoxContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  checkbox: {
    margin: 8,
  },
  errorMsg: {
    fontSize: 15,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: colors.textColor,
    borderBottomWidth: 1,
    alignSelf: "center",
    padding: 10,
  },
  text: {
    fontFamily: 15,
  },
});
