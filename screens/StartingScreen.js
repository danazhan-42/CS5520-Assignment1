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

function StartingScreen(props) {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header></Header>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card>
          <AppText>Name</AppText>
          <ValidationTextInput
            regex={/^[a-zA-Z ]{2,30}$/}
            validationMessage="Please enter a valid name"
            reset={resetFlag}
          />
          <AppText>Email address</AppText>
          <ValidationTextInput
            regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            validationMessage="Please enter a valid email"
            reset={resetFlag}
          />
          <AppText>Phone number</AppText>
          <ValidationTextInput
            regex={/^\d{3}\d{3}\d{4}$/}
            validationMessage="Please enter a valid phone number of the form xxxxxxxxxx"
            reset={resetFlag}
          />
          <APPCheckBox
            label="I am not a robot"
            onValueChange={setIsCheckboxSelected}
            reset={resetFlag}
          ></APPCheckBox>
          <View style={styles.bottonContainer}>
            <AppBotton
              title="reset"
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
        modalVisibility={isModalVisible}
        hideModal={makeModalInvisible}
      ></ConfirmScreen>
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
