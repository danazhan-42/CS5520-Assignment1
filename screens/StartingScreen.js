import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import ValidationTextInput from "../components/ValidationTextInput";
import APPCheckBox from "../components/APPCheckBox";
import AppBotton from "../components/AppBotton";
import ConfirmScreen from "./ConfirmScreen";
import Screen from "../components/Screen";

function StartingScreen(props) {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleReset = () => {
    setResetFlag(!resetFlag);
    setIsCheckboxSelected(false);
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
          <ValidationTextInput
            regex={/^[a-zA-Z ]{2,30}$/}
            message="Please enter a valid name"
            reset={resetFlag}
            onChangeText={setName}
          />
          <AppText>Email address</AppText>
          <ValidationTextInput
            regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            message="Please enter a valid email"
            reset={resetFlag}
            onChangeText={setEmail}
          />
          <AppText>Phone number</AppText>
          <ValidationTextInput
            regex={/^\d{3}\d{3}\d{4}$/}
            message="Please enter a valid phone number of the form xxxxxxxxxx"
            reset={resetFlag}
            onChangeText={setPhone}
          />
          <APPCheckBox
            label="I am not a robot"
            onValueChange={setIsCheckboxSelected}
            reset={resetFlag}
          ></APPCheckBox>
          <View style={styles.bottonContainer}>
            <AppBotton
              title="Reset"
              color="red"
              onPress={handleReset}
            ></AppBotton>
            <AppBotton
              title="Start"
              color="blue"
              disabled={!isCheckboxSelected}
              onPress={makeModalVisible}
            ></AppBotton>
          </View>
        </Card>
      </View>
      <ConfirmScreen
        userInfo={[name, email, phone]}
        modalVisibility={isModalVisible}
        hideModal={makeModalInvisible}
      ></ConfirmScreen>
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
