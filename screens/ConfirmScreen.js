import React from "react";
import { Modal, Text, StyleSheet, SafeAreaView, View } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppBotton";
import AppText from "../components/AppText";

function ConfirmScreen({ userInfo, modalVisibility, hideModal }) {
  return (
    <Modal visible={modalVisibility}>
      <SafeAreaView style={styles.container}>
        <Card>
          <View style={styles.buttonContainer}>
            <AppText>{userInfo}</AppText>
            <AppButton title="Go Back" color="red" />
            <AppButton title="Continue" color="blue" />
          </View>
        </Card>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
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
});

export default ConfirmScreen;
